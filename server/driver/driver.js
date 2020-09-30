const { Movie, Rating } = require('../models');


function insertMovie(){
    let movie = Movie.build({moviesId:'560c24c1', moviesName:'The Martian', plot:'Abcd'});
    movie.save()
.then((movie)=>{console.log('inserted')})
.catch(err => console.log(err));

}


function getMovies(){

    Movies.findAll({raw:true})
    .then(movies => {
        console.log(movies);
    })
    .catch(err => console.log(err));
}

function insertRating(){
    let rating = Rating.build({moviesId:1, rating:4,});
    rating.save()
.then((rating)=>{console.log('inserted')})
.catch(err => console.log(err));

}

//insertRating();


function getMoviesWithRating(){

    Movie.findAll({
        include: [{
            model: Rating
          }]})
    .then(movies => {
        console.log(movies);
    })
    .catch(err => console.log(err));
}


getMoviesWithRating();
