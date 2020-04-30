import { createSlice } from '@reduxjs/toolkit';
import api from '../../utils/Api';
/* Actions and Reducers */
export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        searchMovie: '',
        errors: []
    },
    reducers: {
        searchMovie: (state, action) => {
            state.searchMovie = action.payload;
        },
        createMovieList: (state, action) => {
            state.moviesList = action.payload;
        },
        createError: (state, action) => {
            state.errors.push(action.payload)
        },
        cleanMovieSeach: (state) => {
            state.searchMovie = '';
        }
    }
});

export const { searchMovie, createMovieList, createError } = moviesSlice.actions;


/* Methods */
export const selectMovies = movie => dispatch => {
    return api.get(`&s=${movie}`)
        .then(({data}) => data !== undefined ? data.Search : undefined)
        .then((data) => {
            if(data === undefined)
                return dispatch(createError(`The search with ${movie} didn't find any results.`))

            dispatch(createMovieList(data))
        })
        .catch((error) => dispatch(createError(error.message)));
}


/* Selectors */
export const selectMoviesList = state => state.movies.moviesList;
export const selectErrors = state => state.movies.errors;

export default moviesSlice.reducer;
