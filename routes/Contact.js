const express = require('express');
const Router =  express.Router();


const Contact = require ("../Model/Contact")

const ContactControllers = require("../controllers/ContactControllers");

//Post Contact
Router.post("/post",ContactControllers.postContact)
//test Routing
Router.get("/hello", (req,res)=>{
    res.send("hello world ")
})
//get all Contacts
Router.get("/", async(req,res)=>{

try {
    const result = await Contact.find();
    res.status(200).send({response: result, msg:"geting Contacts succes"})
} catch(error) {
    res.status(500).send({msg:"can not get contacts"})

}

})
//get By ID
Router.get(":id/", async(req,res)=>{

    try {
        const result = await Contact.findOne({_id:req.params.id});
        res.status(200).send({response: result, msg:"geting Contact succes"})
    } catch(error) {
        res.status(400).send({msg:"can not get contact whith this ID"})
    }
    })
    
// delete Contact
Router.delete("/:id", async(req,res)=>{
    try {
        const result = await Contact.deleteOne({_id:req.params.id})
        result?
        res.status(200).send({msg:"contact deleted"})
        :
        res.status(400).send({msg : "can not Contact"})
    } catch (error) {
        res.status(500).send({msg :"can not delete Contact"})
    }
})

// update  Contact with ID
Router.put("/:id", async(req,res)=>{
    try {
        const result = await Contact.updateOne({_id:req.params.id}, {$set:{...req.body}})
        result?
        res.status(200).send({msg:"contact updated"})
        :
        res.status(400).send({msg : "can not Contact"})
    } catch (error) {
        res.status(500).send({msg :"can not update Contact"})
    }
})


module.exports = Router