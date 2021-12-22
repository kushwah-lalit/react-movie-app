import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addmovies,setShowFavourites} from '../actions';

class App extends React.Component {
  componentDidMount (){
    // api call
    // dispatch action
    const {store} = this.props;
    store.subscribe(() =>{
      console.log('Updated');
      this.forceUpdate();
    });

    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies: data
    // });
    // ideal way to do
    store.dispatch(addmovies(data));

    console.log('STATE',store.getState());
  }
  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }
  render(){
    // const movies = this.props.store.getState();//this was case when state was array of movies but now object
    const {list,favourites,showFavourites} = this.props.store.getState();
    console.log(this.props.store.getState());
    const displayMovies = showFavourites ? favourites:list;

    console.log('RENDER');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
              {displayMovies.map((movie,index) => (
                // as we got store in props so need to send the store dispatch via props
                  <MovieCard 
                  movie={movie} 
                  key={ `movie-${index}`} 
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                   />
              ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to Display!</div>:null}
        </div>
      </div>
    );
  }
  
}

export default App;
