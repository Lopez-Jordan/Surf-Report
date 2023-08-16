
const router = require('express').Router();
const {Surfer, Location, SurferLocation} = require('../../models');


router.post('/location', async (req, res) => {
    try {
        const newLocation = await Location.create({
            lat: req.body.lat,
            long: req.body.long,
            description: req.body.description
        });
        const newSurferLocation = await SurferLocation.create({
            surfer_id: req.session.surferId,
            location_id: newLocation.id
        });
        if (!newSurferLocation) {
            return res.status(400).json({ message: "This location is already associated with the surfer!" });
        }
        // Alternatively, you can redirect the user after the response
        res.redirect('/');
    } catch (error) {
        console.error("Error:", error); // Debug line
        res.status(400).json(error);
    }
});

router.put('/location/:id', async (req, res) => {
    try {
        const locationId = req.params.id;
        // Fetch the existing location to get its current description
        const existingLocation = await Location.findOne({
            where: {
                id: locationId
            }
        });
        if (!existingLocation) {
            return res.status(404).json({ message: 'Location not found' });
        }
        const newDescription = existingLocation.description + ' ' + req.body.description;

        // Update the location's description
        await Location.update(
            {
                description: newDescription
            },
            {
                where: {
                    id: locationId
                }
            }
        );
        res.status(200).json({ message: 'Location description updated successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
});



router.delete('/location/:id', async (req, res) => {    // DONE AND TESTED
    try {
        const locationId = req.params.id;
        const deletedRows = await SurferLocation.destroy({
            where: {
                location_id: locationId
            }
        });
        if (deletedRows > 0) {
            res.status(200).json({ message: 'Success' });
        } else {
            res.status(404).json({ message: 'No matching ASSOCIATIONS found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;


