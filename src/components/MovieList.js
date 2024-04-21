import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';

//use map function to display each movie from array
//display poster, some movie info, star rating and review form
//space thing out more nicely with bootstrap
const MovieList = (props) => {
    return (
        <>
            {props.movies && props.movies.map((movie, index) => (
            <div className='m-2' key={index}>
                <div className='image-container row'>
                    <img src={movie.Poster} alt='Movie' ></img>
                </div>
                <div className = 'movie-info'>
                <div className='row align-items-left'>Title: {movie.Title} </div>
                <div className='row align-items-left'>Year: {movie.Year} </div>
                <div className='row align-items-left'>Rating: <Stars iconSize={20} /> </div>
                </div>
                <div className='row'><ReviewList /></div>
            </div>
        ))}
        </>
    )
}

export default MovieList;