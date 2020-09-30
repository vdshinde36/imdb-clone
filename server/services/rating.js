/**
 * @file rating.service.js
 * This file includes all service like adding , deleteing removing updating Rating
 * Main reason for seperting controller and service layer is we can sepertate business logic 
 * independent of web app framework like express
 *  (we dont need to pass Express req ,res object to init Test)
 */

const { Rating } = require('../models')



/**
 * This Method create Rating with given moviesId Object in postgres database
 * @param {Object} movie Plain Object for movies 
 */
let createRating = async (rating) => {
    if (rating === null || rating === undefined) {
      throw new Error(`movies is ${movies}`); // returning error
    }
    let ratingModel = Rating.build(rating);
    try{
        ratingModel= await ratingModel.save(); // saving movies to database
        console.log('saving');
        if(ratingModel){
            console.log('Returning true from Rating Service')
            return true; //returning result
        }
        return false;
    }catch(err){
        console.log(err);
    }
}




/**
 * getting rating With moviesId
 * @param {Integer} movie  movies with Id key  
 */
let getRating = async (id) => {
    try{
        let movie= Rating.findAll({ where: { moviesId: id}});
        if(movie){
            return movie; //returning result
        }
        return null; //
    }catch(err){
        console.log(err);
    }
}



module.exports = {
    createRating,
    getRating
}

