/**
 * @file Rating.routes.js
 * @description This file handles all roues for users ratings
 */


const express = require("express");
const router = express.Router();

const { create, read } = require("../controller/rating");

/**
 * route for checkout productcar for user
 */
router.post("/rating/create/", create);
router.get('/rating/:id',read)

module.exports = router;