
const router = require('express').Router();

router.get('/locations')    //  GET  /api/locations

// given a user, find all the locations for that user
// render the 'location'.handlebars with all the location data


router.post('/location');   //  POST /api/location

router.put('/location/:id');    // PUT /api/location/:id

router.delete('/location/:id');     // DELETE /api/location/:id

module.exports = router;