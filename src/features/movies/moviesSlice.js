import { createSlice } from '@reduxjs/toolkit';
import Api from '../../utils/Api';
/* Actions and Reducers */
export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesList: [],
        searchMovie: '',
        errors: [],
        loading: false,
        movieItem:{}
    },
    reducers: {
        searchMovie: (state, action) => {
            state.searchMovie = action.payload;
        },
        createMovieList: (state, action) => {
            state.moviesList = action.payload;
        },
        createMovieItem: (state, action) => {
            state.movieItem = action.payload;
        },
        cleanMovieSearch: (state) => {
            state.searchMovie = '';
        },
        cleanMovieItem: (state) => {
            state.movieItem = {};
        },
        createError: (state, action) => {
            console.log(`add- ${action.payload}`)
            state.errors.push(action.payload)
        },
        cleanError: (state, action) => {
            console.log(`remove - ${state.errors}`)
            state.errors = state.errors.splice(action.payload, 1);
        },
        displayLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { searchMovie, 
               createMovieItem, 
               createMovieList, 
               createError, 
               displayLoading,
               cleanError, 
               cleanMovieItem } = moviesSlice.actions;

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

export const selectMovieDetails = id => dispatch => {
    return Api.get(`&i=${id}`)
    .then(({data}) => dispatch(createMovieItem(data)))
    .catch((error) => dispatch(createError(error.message)));
}


/* Selectors */
export const selectMoviesList = state => state.movies.moviesList;
export const selectMovieItem = state => state.movies.movieItem;
export const selectErrors = state => state.movies.errors;
export const selectLoading = state => state.loading;

export default moviesSlice.reducer;
