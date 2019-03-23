const ContactModel = require('../models/contact-model')



const getAllContact = (req, res, next) => {
    ContactModel.find().then(data => res.json(data))
        .catch(err => console.log(err))
}

const postNewContact = (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    var contact = new ContactModel({
        name,
        email,
        phone
    })
    contact.save()
        .then(data => {
            res.json({
                message: 'new contact has been added'
            })
        })
        .catch(error => console.log(error))
}
const getSingleContact = (req, res, next) => {
    let id = req.params.id;

    ContactModel.findById(id)
        .then(contact => {

            res.status(200).json({
                contact
            })
        }).catch(error => console.log(error))
}


const deleteAllContact = (req, res, next) => {
    ContactModel
        .remove()
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'deleted',
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}


const deleteSingleContact = (req, res, next) => {
    let id = req.params.id;


    ContactModel.findByIdAndRemove(id)
        .then(result => {
            res.status(200).
            json({
                message: `${id} id  has been deleted`,
                result

            })
        }).catch(error => {
            res.status(500)
                .json({
                    message: "error occured",
                    error
                })

        })
}


const updateContact = (req, res, next) => {
    let id = req.params.id;

    var contact = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }


    ContactModel.findByIdAndUpdate(id, contact)
        .then(contact => {
            ContactModel.findById(id)
                .then(newContact => {
                    res.json({
                        message: "Updated Successfully",
                        newContact
                    })
                }).catch(error => {
                    res.json({
                        message: 'Error Occured',
                        error
                    })
                })


        }).catch(error => {
            console.log("Error Occured")
            res.json({
                message: 'Error Occured',
                error
            })
        })

}


// ContactModel.remove({
//         _id: id
//     }).exec()
//     .then(result => {
//         res.status(200).
//         json({
//             message: `${id} id  has been deleted`,
//             result

//         })
//     }).catch(error => {

//     })



module.exports = {
    getAllContact,
    postNewContact,
    getSingleContact,
    updateContact,
    deleteAllContact,
    deleteSingleContact
}