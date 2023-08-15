const router = require('express').Router();
const apiRoutes = require('./api/locationRoutes');
const loginRoutes = require('./loginRoutes/loginRoutes');

const {Surfer, Location, SurferLocation} = require('../models');

const {fetchLocationData} = require('../utils/convertLocation');


router.get('/', async (req, res) => {
  try {
    let locationsWithWaveData = [];
    if (req.session.surferId) {
      const allLocations = await Location.findAll({
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

      if (allLocations.length > 0) {
        locationsWithWaveData = await Promise.all(
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
      }
    }

    res.status(200).render('homepage', {
      Locations: locationsWithWaveData, // Use the merged data
      loggedIn: req.session.loggedIn
    });
  } catch (error) {
    res.status(400).json(req.session);
  }
});



router.use('/api', apiRoutes);
router.use(loginRoutes);

module.exports = router;



