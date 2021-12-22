// import { ADD_MOVIES } from "../actions";

// export default function movies(state = [], action){
//     if(action.type === ADD_MOVIES){
//         return action.movies;
//     }
//     return state;
// }

import { ADD_MOVIES, ADD_FAVOURITE} from "../actions";
const initialMoviesState = {
    list:[],
    favourites:[]
}
export default function movies(state = initialMoviesState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;
    //
    // we can use if else but better use switch case

    switch (action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        default:
            return state;
    }
    
     
}