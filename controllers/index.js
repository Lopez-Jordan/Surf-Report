// homepage ('/') route here

// route to api FOLDER  (mini router)

const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/');

router.use('/api', apiRoutes);

module.exports = router;