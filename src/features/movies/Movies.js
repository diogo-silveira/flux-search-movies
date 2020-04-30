
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    searchMovie, 
    createMovieList, 
    createError,
    selectMoviesList,
    selectErrors,
    selectMovies
} from './moviesSlice';
import styles from './Movies.module.css';

function MovieItem(props) {
    let { imdbID, Title, Poster } = props.movie;
    return(
        <div className="border border-dark col-2 m-1 rounded" key={imdbID}>
            <div className="container">
                <div className="row">
                    <div className="align-items-center d-flex justify-content-center w-100 h-auto" style={{ height: "6rem" }}>
                        <span className="w-auto" >{ Title } </span>
                    </div>
                    <div className="row align-items-end" style={{ height: "18rem" }}>
                        <img className="w-100" alt={ Title } src={Poster} style={{ height: 279, width:188}} ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Movies () {

    const [searchMovie, setSearchMovie] = useState('');
    const dispatch = useDispatch();
    const moviesList = useSelector(selectMoviesList);
    
    const movieDetails = moviesList.map((movie) => 
        <MovieItem key={movie.imdbID} movie={movie}> </MovieItem>
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-inline-flex justify-content-center pb-4">
                    <input className="form-control mr-3 w-25" type="text" value={ searchMovie } onChange={ e => setSearchMovie(e.target.value)}></input>
                    <button className="btn btn-primary px-5" onClick={() => dispatch(selectMovies(searchMovie))}>Search</button>
                </div>
            </div>
                <div className="row justify-content-center">
                        { movieDetails }
                </div>
        </div>
    )

}