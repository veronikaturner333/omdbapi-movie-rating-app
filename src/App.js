import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

//value is stored in searchValue, any time it changes we call the getMovieRequest function
//pass searchValue and setSearchValue to SearchBox and put them into input
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

//arrow function, make request to API with url recieved from omdbapi
//fetch function to get data from API
//async allows you to use await inside the function
//when request happens, it stores the response in response variable
//convert HTTP to Json
const getMovieRequest = async () => {
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=9be43bd6`;

  const response = await fetch(url);
  const responseJson = await response.json();

  //if responseJson.Search has anything in it, set movies to responseJson.Search
  if(responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

//useEffect hook gets called on page load, takes in getMovieRequest function and searchValue array
//calls getMovieRequest function, passing in searchValue (an empty string)
//Then movieRequest takes searchValue and makes a request to the API
//return our movie heading, search box, and movie list
useEffect((searchValue)=> {
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
  <div className='container-fluid movie-app' >
    <div className='row d-flex align-items-center justify-content-between mx-2 my-5'>
      <MovieListHeading heading='Movies'/>
      <SearchBox searchValue= {searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row d-flex justify-content-center'>
      <MovieList movies = {movies} />
    </div>
  </div>
  );
};

export default App;