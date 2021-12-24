import React from "react";
import {addfavourite,removeFromFavourite} from '../actions';
class MovieCard extends React.Component{
    handleFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(addfavourite(movie));
    }
    handleUnFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(removeFromFavourite(movie));
    }
    render(){
        const {movie, isFavourite} = this.props;
        return(
        <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-pic" />
        </div>
        <div className="right">
          <div className="title">
            {movie.Title} ({movie.Year})
          </div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
                isFavourite
                ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick} >Unfavourite</button>
                :<button className="favourite-btn" onClick={this.handleFavouriteClick} >Favourite</button>
            }
            
          </div>
        </div>
      </div>
        );
    }
}
export default MovieCard;
// we can connect this movie card even....Just for the dispatch function else same so Do similar like others