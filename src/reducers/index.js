export default function movies(state = [], action){
    if(action == "ADD_MOVIES"){
        return action.movies;
    }
    return state;
}