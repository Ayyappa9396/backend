const expressAsyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")


const getAllContacts  = expressAsyncHandler(async(req, res) => {
    const contacts = Contact.find()
   await res.status(200).json(contacts)
})

const createContact  = expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const { name,  email, phone} = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
     res.status(201).json(contact)
})
const updateContact  = expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    res.status(201).json({message:"Updated Successfully"})
})

const getContactbyId  = expressAsyncHandler(async(req, res) => {
    console.log(req.body)
    res.status(200).json({ message:`Get contact for ${req.params.id}`})
})
const deleteContactbyId  = expressAsyncHandler(async(req, res) => {
    console.log(req.body)
    res.status(200).json({ message:`delete contact for ${req.params.id}`})
})



module.exports = {getAllContacts, createContact, updateContact, getContactbyId, deleteContactbyId}