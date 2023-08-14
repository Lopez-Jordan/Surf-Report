
const router = require('express').Router();
const Surfer = require('../../models/surfer');
const SurferLocation = require('../../models/surferLocation');
const Location = require('../../models/location');

router.post('/location', async (req, res) => {
    try {
        const existingLocation = await Location.findOne({
            where: {
                lat: req.body.lat,
                long: req.body.long
            }
        });
        let newLocation;
        if (existingLocation) {
            newLocation = existingLocation;
        } else {
            newLocation = await Location.create({
                lat: req.body.lat,
                long: req.body.long,
                description: req.body.description
            });
        }
        const newSurferLocation = await SurferLocation.create({
            surfer_id: req.session.surferId,
            location_id: newLocation.id
        });
        if (!newSurferLocation) {
            return res.status(400).json({ message: "This location is already associated with the surfer!" });
        }
        res.status(200).json({ newLocation, newSurferLocation });
        // Alternatively, you can redirect the user after the response
        // res.redirect('/');
    } catch (error) {
        res.status(400).json(error);
    }
});


router.put('/location/:id', async (req, res) => {
    try {
        const locationId = req.params.id;
        const [rowsUpdated] = await Location.update(
            {
                description: req.body.description
            },
            {
                where: {
                    id: locationId
                }
            }
        );
        if (rowsUpdated === 0) {
            return res.status(404).json({ message: 'Location not found' });
        }

        res.status(200).json({ message: 'Location description updated successfully' });
    } catch (error) {
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

module.exports = router;

