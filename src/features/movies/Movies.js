
import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectMoviesList,
    selectMovies,
    selectLoading,
    selectMovieItem,
    selectMovieDetails,
    cleanMovieItem
} from './moviesSlice';
import style from './Movies.module.css';
import Details from './Details';

function MovieItem(props) {
    
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch = useDispatch();
    let { imdbID, Title, Poster } = props.movie;
    const divClassHighLight = `${style.highlight} border border-dark bg-white col-lg-2 col-xs-6 col-md-4 col-8 mx-2 my-1 rounded px-0`;    
    const movieItem = useSelector(selectMovieItem);

    const openDetails = () => {
        dispatch(selectMovieDetails(imdbID));
        setModalShow(true)
    }
    const closeDetails = () => {
        dispatch(cleanMovieItem());
        setModalShow(false)
    }
    return(
        <Fragment>
            <div className={ divClassHighLight } key={imdbID} onClick={() => openDetails()}>
                <div className="container">
                        <div className="align-items-center d-flex justify-content-center px-2 py-1 row text-center" style={{ height: "5rem" }}>
                            <span className="w-auto" >{ Title } </span>
                        </div>
                        <div className="row align-items-end" style={{ height: "18rem" }}>
                            
                                <img className="w-100" alt={ Title } src={Poster} style={{ height: 279, width:188}} ></img>
                            
                        </div>
                </div>
            </div>
            <Details item={movieItem} show={modalShow} onHide={ closeDetails} />         
        </Fragment>
    );
}

export function Movies () {

    const [searchMovie, setSearchMovie] = useState('');
    const dispatch = useDispatch();
    const moviesList = useSelector(selectMoviesList);
    const loading = useSelector(selectLoading);

    const movieDetails = moviesList.map((movie) => 
        <MovieItem key={movie.imdbID} movie={movie}> </MovieItem>
    )

    const loadingData = () => {
            if(loading) {
                return (<div className="fade spinner-border text-primary"></div>)
            } else {
                return (
                    <div className="row justify-content-center">
                        { movieDetails }
                    </div>
                )
            }
    }

    return (
        <div className="col-12 p-0">
            <div className="col-12 justify-content-center p-0 pb-4">
                <div className="col-12 col-lg-6 justify-content-center pb-4 row">
                    <div className="col-12 col-lg-4 col-md-6 pb-2">
                        <input className="form-control mr-3 " type="text" value={ searchMovie } onChange={ e => setSearchMovie(e.target.value)} placeholder="Search a movie..."></input>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4">
                        <button className="btn btn-primary px-5 w-100" onClick={() => dispatch(selectMovies(searchMovie))}>Search</button>
                    </div>
                </div>
            </div>
            <div className="col-12 justify-content-center m-0 p-0 row">
                
                <div className="col-12 col-lg-10 row">
                    { loadingData() }
                </div>
                
            </div>
                
        </div>
    )

}