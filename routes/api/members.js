const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

//todo This is an API for the CRUD Operations

//todo returning a json
// Get all the members
router.get('/',(req,res)=>{
    res.json(members)
})

//todo get a single member
router.get('/:id',(req,res)=>{

    const found  = members.some(member=> member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }

});

//todo create a member
router.post('/',(req,res)=>{
    const newMember={
        id: uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newMember.name|| !newMember.email){
        //todo Note we are setting the status code as 400
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    //todo ideally here MongoDB is used
    members.push(newMember);
    res.json(members);
})


//todo Update a member
router.put('/:id',(req,res)=>{

    const found  = members.some(member=> member.id === parseInt(req.params.id));
    if(found) {
        const upMember = req.body;
        members.forEach(member=>{
            //todo while looping
            // only update the member of the request id
            if(member.id=== parseInt(req.params.id)) {
                member.name = upMember.name ? upMember.name : member.name;
                member.email = upMember.email ? upMember.email : member.email;

                res.json({msg:'Member Updated',member:member});
            }
        })
    }else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }

});


//todo Delete a single member
// Note this is only filtering and not actual deletion
router.delete('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json({msg: 'Member Deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }

});




module.exports = router;
