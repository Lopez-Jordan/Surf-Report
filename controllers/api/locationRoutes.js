
const router = require('express').Router();
const {Surfer, Location, SurferLocation} = require('../models');

router.post('/location', async (req,res)=>{
    try{
        const newLocation = await Location.create({
            description: req.body.description,
            lat: req.body.lat,
            long: req.body.long
        });

        const newSurferLocation = await SurferLocation.create({
            surfer_id: req.body.surferId,
            location_id: newLocation.id
        });
        res.status(200).json({newLocation, newSurferLocation});
    } catch(error){
        res.status(400).json(error);
    }
});

router.put('/location/:id', async (req,res)=>{
    try{
        const locationId = req.params.id;
        const [updatedLocation] = await Location.update(
            {
                description: req.body.description
            },
            {
                where: {
                    id: locationId
                }
            }
        );
        if (updatedLocation === 0) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.status(200).json({message: 'Success!'});
    } catch (error){
        res.status(400).json(error);
    }
}); 


router.delete('/location/:id', async (req,res)=>{   //  /api/location/:id
    try{
        const locationId = req.params.id;
        SurferLocation.destroy({
            where: {
                location_id: locationId
            }
        })
        res.status(200).json({message: 'success'});

    }catch (error){
        res.status(400).json(error);
    }
});     







// ur really deleting the association nothing else


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

