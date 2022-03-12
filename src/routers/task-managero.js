const express = require('express')
const router = new express.Router()

// Create a task
router.get('/', (req, res) => {
    res.send('hello world')
  })