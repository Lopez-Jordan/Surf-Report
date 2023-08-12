// route to surfer routes-which has the login/logout/signup/sign in etc.
const router = require('express').Router();
const { Surfer } = require('../models/surfer');
const { Location } = require('../models/location');

router.get('/login', async (req,res)=>{     // DONE (not tested)
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
});


router.post('/login', async (req,res)=>{    // DONE (not tested)
    try{
        const surferData = await Surfer.findOne({ where: { name : req.body.name} });
        if(!surferData){
            res.status(400).json({message: 'incorrect username!'});
            return;
        }
        validPassword = await surferData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message: "incorrect password!"});
            return;
        }
        req.session.save(() => {
            req.session.user_id = surferData.id;
            req.session.loggedIn = true;
            res.status(200).json({ user: surferData, message: 'You are now logged in!' });
          });
    }
    catch (error){
        res.status(500).json(error);
    }
});   










router.get('/signup')

router.post('/signup')

router.post('/logout');

module.exports = router;