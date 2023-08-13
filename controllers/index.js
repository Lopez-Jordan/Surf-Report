const router = require('express').Router();
const apiRoutes = require('./api');
const {Surfer, Location, SurferLocation} = require('../models');

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
        const Locations = allLocations.map((el) => el.get({ plain: true }));

        res.status(200).render('homepage', {
            Locations,
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

// render homepage with all cards 



router.use('/api', apiRoutes);

module.exports = router;