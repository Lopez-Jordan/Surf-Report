const router = require('express').Router();
const apiRoutes = require('./api/locationRoutes');
const loginRoutes = require('./loginRoutes/loginRoutes');

const Surfer = require('../models/surfer');
const SurferLocation = require('../models/surferLocation')
const Location = require('../models/location')
// CHECK THIS IS IMP
const {fetchLocationData} = require('../utils/convertLocation');


router.get('/', async (req, res) => {
    try {
      let allLocations = [];
      if (req.session.surferId) {
        allLocations = await Location.findAll({
          include: [
            {
              model: Surfer,
              through: {
                model: SurferLocation,
                where: {
                  surfer_id: req.session.surferId
                }
              }
            }
          ]
        });
    
      }

      const Locations = allLocations.map((el) => el.get({ plain: true })); // Array of plain objects
  
        // Fetch Windy API data for each location and add properties
        const locationsWithWaveData = await Promise.all(
          Locations.map(async (location) => {
            const waveData = await fetchLocationData(location.lat, location.long);
            return {
              ...location,
              waveHeight: waveData.waveHeight,
              wavePeriod: waveData.wavePeriod,
              waveDirection: waveData.waveDirection
            };
          })
        );
  
        res.status(200).render('homepage', {
          Locations: locationsWithWaveData,
          loggedIn: req.session.loggedIn
        });

    } catch (error) {
      res.status(400).json(error);
    }
  });

router.use('/api', apiRoutes);
router.use(loginRoutes);

module.exports = router;



