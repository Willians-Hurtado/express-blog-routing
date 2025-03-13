const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('show all posts')
})

//show
router.get('/:id', (req,res) => {
    res.send(`show the post with id: ${req.params.id}`)
})

//create
router.post('/', (req,res) => {
    res.send('create a new post')
})

//update
router.put('/:id', (req,res) => {
    res.send(`update the post with id: ${req.params.id}`)
})


//delete
router.delete('/:id', (req,res) => {
    res.send(`delete the post with id: ${req.params.id}`)
})

module.exports = router;