const router = require('express').Router();
const apiRoutes = require('./api');
const {Surfer, Location, SurferLocation} = require('../models');

router.get('/', async (req, res) => {       // DONE (not tested)
    try {
        let allLocations = [];
        if (req.session.surferId) {
            allLocations = await Location.findAll({ // render homepage with all cards associated with one surfer
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
        const Locations = allLocations.map((el) => el.get({ plain: true }));    //an array of objects

        res.status(200).render('homepage', {
            Locations,  //an array of objects
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        res.status(400).json(error);
    }
});


// router.get('/', async (req, res) => {
//     try {
//       let allLocations = [];
//       if (req.session.surferId) {
//         allLocations = await Location.findAll({
//           include: [
//             {
//               model: Surfer,
//               through: {
//                 model: SurferLocation,
//                 where: {
//                   surfer_id: req.session.surferId
//                 }
//               }
//             }
//           ]
//         });
//       }
  
//       const Locations = allLocations.map((el) => el.get({ plain: true })); // Array of plain objects
  
//       // Fetch Windy API data for each location and add properties
//       const locationsWithWaveData = await Promise.all(
//         Locations.map(async (location) => {
//           const waveData = await fetchLocationData(location.lat, location.long);
//           return {
//             ...location,
//             waveHeight: waveData.waveHeight,
//             wavePeriod: waveData.wavePeriod,
//             waveDirection: waveData.waveDirection
//           };
//         })
//       );
  
//       res.status(200).render('homepage', {
//         Locations: locationsWithWaveData,
//         loggedIn: req.session.loggedIn
//       });
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   });

router.use('/api', apiRoutes);

module.exports = router;



