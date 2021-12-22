// {
//     type:"ADD_MOVIES",
//     movies:[m1,m2,m3]
// }
// {
//     type:"INCREASE_COUNT"

// }
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export function addmovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
};
export function addfavourite(movie){
    return{
        type:ADD_FAVOURITE,
        movie
    }
};