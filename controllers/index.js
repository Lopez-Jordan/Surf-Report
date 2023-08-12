const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/');
// just render the homepage

router.use('/api', apiRoutes);

module.exports = router;