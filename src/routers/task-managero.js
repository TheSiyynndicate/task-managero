
// Requiring express in our server
const express = require('express');
const app = express();
const router = new express.Router()

// Defining get request at '/' route
router.get('/', function(req, res,next) {
    res.json({
      "message":"Hello World, it's the TaskManager!.",
      "data":{}
    });
  });

  module.exports = router;