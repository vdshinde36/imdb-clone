/**
 * @file Rating.Controller.js
 * This file includes all controller Method like create update delete read Rating.
 * This file Only handles request respose for user like parsing response if neccessry
 */

const { createRating, getRating  } = require('../services/rating');


/**
 * Controller for habdling creation of Rating in database
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
module.exports.create = async (req, res, next) => {
    let { moviesId, rating} = req.body;
    //checking if all values are present
    if(!moviesId || !rating){
        return res.json({
            error:{
                errMsg:'Please Send All field Which Are neccrssary',
                _bodyParams:req.body
            }
        });
    }

    // calling craete Services Method for Rating
    try{
        let rating = await createRating({moviesId, rating});
        if(rating){
            console.log('success returning rating');
            console.log(movie)
            return res.json({
                error:null,
                _success:true,
                payload:rating
            });
        }else{
            return res.json({
                _success:false,
                error:{
                    errMsg:'add rating failed',
                }
            });
        }

    }catch(err){
        console.log(err)
        return res.json({
            _success:false,
            error:{
                errMsg:'something went wrong try again',
                _error:err
            }
        });
    }

}









/**
 * get One rating Based on moviesId
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
module.exports.read = async (req, res, next) => {
    // calling getMovies Services Method
    let id = req.params.id;
    if (!id){
        return res.json({
            error:{
                errMsg:'Please check id of rating',
                _bodyParams:req.body
            }
        });
    }
    try{
        let rating = await getRating(id);
        if(rating){
            return res.json({
                error:null,
                _success:true,
                payload:movie
            });
        }else{
            return res.json({
                _success:false,
                error:{
                    errMsg:'Rating Not Prsent',
                }
            });
        }

    }catch(err){
        return res.json({
            _success:false,
            error:{
                errMsg:'something went wrong try again',
                _error:err
            }
        });
    }

}

