
const router = require('express').Router();

router.get('/locations')    //  /api/locations
// given a user, find all the locations for that user
// render the 'location'.handlebars with all the location data

router.post('/location');   //  /api/location


router.put('/location/:id');    //  /api/location/:id

router.delete('/location/:id');     //  /api/location/:id

module.exports = router;