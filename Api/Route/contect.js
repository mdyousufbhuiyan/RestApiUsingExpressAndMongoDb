const express = require('express')
const contactController = require('../Controller/Contact')


const router = express();

//..............get All Contact............................
router.get('/', contactController.getAllContact)
//...............Add New Single Contact....................
router.post('/', contactController.postNewContact)
//................get Single Contact.......................
router.get('/:id', contactController.getSingleContact)

//.................update Contact...........................
router.put('/:id', contactController.updateContact)
//..................delete all contact .................
router.delete('/', contactController.deleteAllContact)

//...................delete single contact................
router.delete('/:id', contactController.deleteSingleContact)

module.exports = router