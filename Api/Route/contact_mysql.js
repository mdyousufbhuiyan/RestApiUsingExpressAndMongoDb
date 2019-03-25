const express = require('express');
const router = express();
const contactControllerMySql = require('../Controller/contact_mysql')


// router.get('/', contactControllerMySql.createTabel)
router.post('/', contactControllerMySql.postContact)
router.get('/', contactControllerMySql.getAllData)
router.get('/:id', contactControllerMySql.getSingleContact)
router.put('/:id', contactControllerMySql.updtaContact)
router.patch('/:id', contactControllerMySql.updtaParticularContact)
router.delete('/:id', contactControllerMySql.deleteSingleItem)

module.exports = router;