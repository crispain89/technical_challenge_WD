const router = require('express').Router()
const data = require('../data/phones.json');
router.get('/', (req, res, next) => { 
    res.json(data)
})
router.get('/:id', (req, res, next) => { 
    const id = req.params.id
    const info=data.find((phone) => phone.id === Number(id))
    res.json(info)
})

module.exports=router