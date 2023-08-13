
const router = require('express').Router();
const {Surfer, Location, SurferLocation} = require('../models');

router.post('/location');   //  /api/location

// create the location
// find that new location id ^

// don't forget to update the surferLocation table like below:

// await SurferLocation.create({
//     SurferId: surferId,
//     LocationId: location.id,
//     date_visited: dateVisited
//   });

router.put('/location/:id');    //  /api/location/:id
// normal


router.delete('/location/:id');     //  /api/location/:id

// ur really deleting the association (not the surfer or the location)


    //   const { surferId, locationId } = req.params;
  
    //   const surferLocation = await SurferLocation.findOne({
    //     where: { SurferId: surferId, LocationId: locationId }
    //   });
  
    //   if (!surferLocation) {
    //     return res.status(404).json({ error: 'Visited location not found' });
    //   }
  
    //   await surferLocation.destroy();
    //   res.json({ message: 'Visited location deleted' });
    // } catch (error) {
    //   res.status(500).json({ error: 'Error deleting visited location' });
    // }

  



module.exports = router;