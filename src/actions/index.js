// {
//     type:"ADD_MOVIES",
//     movies:[m1,m2,m3]
// }
// {
//     type:"INCREASE_COUNT"

// }
export const ADD_MOVIES = "ADD_MOVIES";
export function addmovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
};