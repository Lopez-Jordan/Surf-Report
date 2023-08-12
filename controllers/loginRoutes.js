const router = require('express').Router();
const { Surfer } = require('../models/surfer');

router.get('/login', async (req,res)=>{     // DONE (not tested)
    if(req.session.loggedIn){
        res.status(200).redirect('/');
        return;
    }
    res.status(200).render('login');
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
            req.session.surferId = surferData.id;
            req.session.loggedIn = true;
            res.status(200).json({ user: surferData, message: 'You are now logged in!' });
          });
    }
    catch (error){
        res.status(500).json(error);
    }
});   


router.get('/signup', async (req,res)=>{    // DONE (not tested)
    res.status(200).render('signup');
});


router.post('/signup', async (req,res)=>{
    try{
        const newSurfer = Surfer.create({
            name: req.body.name,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.surferId = newSurfer.id;
            req.session.loggedIn = true;
            res.status(200).json(newSurfer);
        });
    } 
    catch (error){
        res.status(400).json(error);
    }
});

router.post('/logout');

module.exports = router;