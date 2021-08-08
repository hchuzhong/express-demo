import { RequestHandler } from "express";

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('there is users.js');
} as RequestHandler);
router.get('/test', function (req, res, next) {
  res.send('there is users.js/test');
} as RequestHandler);

module.exports = router;
