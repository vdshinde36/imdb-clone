/**
 * @file Movies.routes.js
 * @description This file handles all roues for users Movies
 */


const express = require("express");
const router = express.Router();

const { create, readAll, read } = require("../controller/movies");

/**
 * route for checkout productcar for user
 */
router.post("/movie/create/", create);
router.get('/movies/',readAll);
router.get('/movie/:id',read)

module.exports = router;