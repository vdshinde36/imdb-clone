/**
 * @file movies.service.js
 * This file includes all service like adding , deleteing removing updating movies
 * Main reason for seperting controller and service layer is we can sepertate business logic 
 * independent of web app framework like express
 */

const { Movie } = require('../models')



/**
 * This Method create Movie with given movies Object in postgres database
 * @param {Object} movie Plain Object for movies 
 */
let createMovie = async (movie) => {
    if (movie === null || movie === undefined) {
      throw new Error(`movies is ${movies}`); // returning error
    }
    let movieModel = Movie.build(movie);
    try{
        movieModel=movieModel.save(); // saving movies to database
        console.log('saving');
        if(movie){
            console.log('Returning true from createMovie Service')
            return true; //returning result
        }
        return false;
    }catch(err){
        console.log(err);
    }
}


/**
 * getting all movie
 * @return{Array} movies
 */
let getMovies = async () => {
    try{
        let movies = Movie.findAll(); // finding all movies
        if(movies){
            return movies; //returning result
        }
        return null; //
    }catch(err){
        console.log(err);
        return null;
    }
}


/**
 * 
 * @param {Integer} movie  movies with Id key  
 */
let getMovie = async (id) => {
    try{
        let movie= Movie.findByPk(id); // finding all movies
        if(movie){
            return movie; //returning result
        }
        return null; //
    }catch(err){
        console.log(err);
    }
}



module.exports = {
    createMovie,
    getMovies,
    getMovie
}

