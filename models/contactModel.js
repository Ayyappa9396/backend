const moongose = require("mongoose")

const contactScheema = moongose.Schema({
    name: {
        type: 'string',
        required: [true, 'please add the contact name']
    },
    email: {
        type: 'string',
        required: [true, 'please add the contact email']
    },
    phone: {
        type: 'string',
        required: [true, 'please add the contact Phone Number']
    },
},
{
    timestamps : true
}
)

module.exports = moongose.model("contact", contactScheema)