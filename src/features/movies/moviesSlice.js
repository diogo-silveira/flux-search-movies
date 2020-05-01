import { createSlice } from '@reduxjs/toolkit';
import Api from '../../utils/Api';
/* Actions and Reducers */
export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        searchMovie: '',
        errors: [],
        loading: false
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
        cleanMovieSearch: (state) => {
            state.searchMovie = '';
        },
        displayLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { searchMovie, createMovieList, createError, displayLoading } = moviesSlice.actions;

/* Methods */
export const selectMovies = movie => dispatch => {
    return Api.get(`&s=${movie}`)
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
export const selectLoading = state => state.loading;

export default moviesSlice.reducer;
