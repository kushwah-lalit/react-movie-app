// import { ADD_MOVIES } from "../actions";

// export default function movies(state = [], action){
//     if(action.type === ADD_MOVIES){
//         return action.movies;
//     }
//     return state;
// }
// for using rootReducers
import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT} from "../actions";
const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites:false
}
// since we will be having root reducer there we will using default
export function movies(state = initialMoviesState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;
    //
    // we can use if else but better use switch case
    console.log('Movies Reducer');
    switch (action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            //filter returns neww array so no voilation of rule
            return {
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
        return {
            ...state,
            showFavourites:action.val
        }
        // since to add to list
        case ADD_MOVIE_TO_LIST:
        return {
            ...state,
            list: [action.movie, ...state.list],
        };
        default:
            return state;
    }
    
     
}
// Creating the different reducer to handel secific part of the state
const initialSearchState = {
    results: {},
    showSearchResults: false,
  };
  
export function search(state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                results: action.movie,
                showSearchResults: true,
            };
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false,
            };
        default:
            return state;
    }
}
// const initialRootState = {
//     movies:initialMoviesState,
//     search:initialSeacrhState
// }
// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
// using combine reducers
export default combineReducers({
    movies,
    search
});
