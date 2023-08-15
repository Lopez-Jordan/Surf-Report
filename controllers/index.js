const router = require('express').Router();
const apiRoutes = require('./api/locationRoutes');
const loginRoutes = require('./loginRoutes/loginRoutes');

const Surfer = require('../models/surfer');
const SurferLocation = require('../models/surferLocation');
const Location = require('../models/location');

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

    const locationsWithWaveData = await Promise.all(
      allLocations.map(async (location) => {
        const waveData = await fetchLocationData(location.lat, location.long);
        return {
          ...location.get({ plain: true }), // Convert to plain object
          waveHeight: waveData.waveHeight,
          wavePeriod: waveData.wavePeriod,
          waveDirection: waveData.waveDirection
        };
      })
    );

    res.status(200).render('homepage', {
      Locations: locationsWithWaveData, // Use the merged data
      loggedIn: req.session.loggedIn
    });
  } catch (error) {
    res.status(400).json(error);
  }
});


router.use('/api', apiRoutes);
router.use(loginRoutes);

module.exports = router;



