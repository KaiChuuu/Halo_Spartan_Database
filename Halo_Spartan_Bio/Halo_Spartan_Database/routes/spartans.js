const express = require('express');
const { remove } = require('../models/Spartan');

const router = express.Router();
const Spartan = require('../models/Spartan');

//GET ALL SPARTAN DATABASE
router.get('/', async function(request, response) {
    try{
        //lists all spartans in database.
        const spartans = await Spartan.find();
        response.json(spartans);
    }catch(err){
        response.json({message:err});
    }
});

//POST NEW SPARTAN
router.post('/', async function(request,response){
    const spartans = new Spartan({
        name: request.body.name,
        service_number: request.body.service_number,
        home_world: request.body.home_world,
        birth: request.body.birth,
        species: request.body.species,
        status: request.body.status
    });

    try{
        const savedSpartan = await spartans.save();
        response.json(savedSpartan);
    } catch (err) {
        response.json({message: err});
    }

});

//GET SPECIFIC SPARTAN ID
router.get('/:spartanId', async function(request, response){
    try{
        const spartan = await Spartan.findById(request.params.spartanId);
        response.json(spartan);
    }catch(err){
        response.json({message:err});
    }
});

//DELETE SPARTAN DATABASE
router.delete('/:spartanId', async function(request, response){
    try{
        const removedSpartan = await Spartan.remove({_id: request.params.spartanId}); 
        response.json(removedSpartan);
    }catch(err){
        response,json({message:err});
    }
});

//UPDATE SPARTAN STATUS
router.patch('/:spartanId', async function(request, response){
    try{
        const updatedSpartan = await Spartan.updateOne(
            {_id: request.params.spartanId} ,
            {$set: {status: request.body.status} }
        );
        response.json(updatedSpartan);
    }catch(err){
        response.json({message: err});
    }
});

module.exports = router;