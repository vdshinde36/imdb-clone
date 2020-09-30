/**
 * @file movies.Controller.js
 * This file includes all controller Method like create update delete read method.
 * This file Only handles request respose for user like parsing response if neccessry
 */

const { createMovie, getMovies, getMovie } = require('../services/movies');


/**
 * Controller for habdling creation of movies in database
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
module.exports.create = async (req, res, next) => {
    let { moviesId, moviesName, plot } = req.body;
    //checking if all values are present
    if(!moviesId || !moviesName || !plot){
        return res.json({
            error:{
                errMsg:'Please Send All field Which Are neccrssary',
                _bodyParams:req.body
            }
        });
    }

    // calling craete Services Method
    try{
        let movie = await createMovie({moviesId, moviesName, plot});
        if(movie){
            console.log('success returning movie')
            console.log(movie)
            return res.json({
                error:null,
                _success:true,
                payload:movie
            });
        }else{
            return res.json({
                _success:false,
                error:{
                    errMsg:'add movies failed',
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
 * Get all movies in Database without any filter
 * @param {Request} req 
 * @param {import} res 
 * @param {Function} next 
 */
module.exports.readAll = async (req, res, next) => {
    // calling getMovies Services Method
    try{
        let movie = await getMovies();
        if(movie){
            return res.json({
                error:null,
                _success:true,
                payload:movie
            });
        }else{
            return res.json({
                _success:false,
                error:{
                    errMsg:'Movies Not Prsent',
                }
            });
        }

    }catch(err){
        console.log(err);
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
 * get One Movies Based on PrimaryKey
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
                errMsg:'Please check id of movie',
                _bodyParams:req.body
            }
        });
    }
    try{
        let movie = await getMovie(id);
        if(movie){
            return res.json({
                error:null,
                _success:true,
                payload:movie
            });
        }else{
            return res.json({
                _success:false,
                error:{
                    errMsg:'Movie Not Prsent',
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

