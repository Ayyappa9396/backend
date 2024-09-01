


const getAllContacts  = (req, res) => {
    res.status(200).json({ message:"Get All Contacts"})
}


module.exports = {getAllContacts}