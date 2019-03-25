const Contact = require("../models/contact_model_mysql");

var createTabel = (req, res, next) => {
    console.log("Created");

    // Contact.createTabel();
};

const getAllData = (req, res, next) => {
    var rawQuery = "Select * from contact";
    Contact.query(rawQuery, (error, result, field) => {
        if (error) throw error;

        res.status(200).json({
            result
        });
    });
};

const getSingleContact = (req, res, next) => {
    let id = req.params.id;

    let rawQuery = 'Select * from contact Where ID = ?'

    Contact.query(rawQuery, [id], (error, result, field) => {
        if (error) throw error;

        res.status(200).json({
            result
        })
    })
}

const updtaContact = (req, res, next) => {
    let id = req.params.id;
    var contact = {
        name: req.body.name,
        phone: req.body.phone
    }

    let updateQuery = `Update contact SET ? Where ID= ${id}`

    Contact.query(updateQuery, contact, (error, result, field) => {
        if (error) throw error;
        res.json({
            message: 'Updated',
            result: result.affectedRows
        })

    })
}
const updtaParticularContact = (req, res, next) => {
    let id = req.params.id;
    var contact = {
        name: req.body.name
        //phone: req.body.phone
    }

    let updateQuery = `Update contact SET ? Where ID= ${id}`

    Contact.query(updateQuery, contact, (error, result, field) => {
        if (error) throw error;
        res.json({
            message: 'Updated',
            result: result.affectedRows
        })

    })
}



const postContact = (req, res, next) => {
    //Contact.connect();
    let name = req.body.name;
    let phone = req.body.phone;

    var sql = "INSERT INTO contact SET ?";
    var values = {
        name,
        phone
    };
    Contact.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: ");
        res.json({
            message: "Saved",
            Result: result.affectedRows
        });
    });
    //  Contact.end();
    // next();
};


const deleteSingleItem = (req, res, next) => {

    let id = req.params.id;

    let deleteQuery = `Delete from contact where ID = ${id}`

    Contact.query(deleteQuery, (error, result) => {
        if (error) throw error;
        res.status(220).json({
            message: "Deleted",
            Result: result

        })

    })
}


module.exports = {
    createTabel,
    postContact,
    getAllData,
    getSingleContact,
    updtaContact,
    updtaParticularContact,
    deleteSingleItem
};