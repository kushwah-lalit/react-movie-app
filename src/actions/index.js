// {
//     type:"ADD_MOVIES",
//     movies:[m1,m2,m3]
// }
// {
//     type:"INCREASE_COUNT"

// }
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export function addmovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
};
export function addfavourite(movie){
    return{
        type:ADD_TO_FAVOURITES,
        movie
    }
};
export function removeFromFavourite(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie
    }
};