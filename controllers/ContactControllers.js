const Contact = require('../Model/Contact')

exports.postContact = async(req , res )=>{
    try {
        
//create a new Contact
const newContact = new Contact(req.body);
//test 1 if has is email
if (!req.body.email){
    res.status(400).send({msg:"email required..."})
    return;
}

//test 2 if email.already exist
const user = await Contact.findOne({msg:req.body.email});
if (user){
    res.status(400).send({email:'"email already exist'})

    return;
}

// save Contact

const response= await newContact.save()

res.status(200).send({response: response, msg:"Contact saved"})

    } catch (error) {
        
        console.log(error)
        res.status(500).send({msg: "can not save Contact"})
    }

}