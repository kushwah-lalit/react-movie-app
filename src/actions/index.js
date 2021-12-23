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
export const SET_SHOW_FAVOURITES ="SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
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
export function setShowFavourites(val){
    return{
        type:SET_SHOW_FAVOURITES,
        val
    }
};
// for search part
export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  };
  
export function handleMovieSearch(searchText) {
    return function (dispatch) {
      const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          console.log('movie', movie);
          // dispatch action to save search results in store
          dispatch(addMovieSearchResult(movie));
        });
    };
  };
  export function addMovieSearchResult(movie) {
    return {
      type: ADD_SEARCH_RESULT,
      movie,
    };
  };