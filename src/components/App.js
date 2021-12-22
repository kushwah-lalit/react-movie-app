import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addmovies} from '../actions';

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
  render(){
    const movies = this.props.store.getState();
    console.log('RENDER');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
              {movies.map((movie,index) => (
                  <MovieCard movie={movie} key={ `movie-${index}`} />
              ))}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
