import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addmovies,setShowFavourites} from '../actions';
// import {StoreContext} from '../index';
import {connect} from '../index';
// now importing connect as we will be connecting component to store instaead of access from consumer at each level..

class App extends React.Component {
  componentDidMount (){
    // api call
    // dispatch action
    // ************ Here we no need to subscribe as will be done by the connect and also no store access in props
              // const {store} = this.props;
              // store.subscribe(() =>{
              //   console.log('Updated');
              //   this.forceUpdate();
              // });
      // *************

    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies: data
    // });
    // ideal way to do

    // store.dispatch(addmovies(data));
    this.props.dispatch(addmovies(data));//via connect props

    // console.log('STATE',store.getState());
  }
  isMovieFavourite = (movie) => {
    // this is for the previous state structure 
    // const {favourites} = this.props.store.getState();
    // const index = favourites.indexOf(movie);

    // As per new structure
    // {
    //   movies:{},
    //   search:{}
    // }


    // no store in connect via props
    // const {movies} = this.props.store.getState();
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    // this.props.store.dispatch(setShowFavourites(val));
    // now store via connect
    this.props.dispatch(setShowFavourites(val));
  }
  render(){
    // const movies = this.props.store.getState();//this was case when state was array of movies but now object
    // const {list,favourites,showFavourites} = this.props.store.getState();//here we have now list favourittes showfavourites keys in objects
    
    // Here as we changed the state structure so getState will be giving the latest pattern of state....so modify it


    // const {movies,search} = this.props.store.getState();

     ////*****************Now we are accessing the data from teh props via connect so no access to store so modify the destructuring */
     const {movies,search} = this.props;
    const {list,favourites,showFavourites} = movies;

    console.log(this.props);
    const displayMovies = showFavourites ? favourites:list;

    console.log('RENDER');
    // ************* This commented type to access the context in render is allowed when we dont have methods beyond our render part that uses the consumer data
    // ****here above there are amny that use the store so we need to wrap it within another class and get data of context via props
    // return (
    //   <StoreContext.Consumer>
    //     {(store) => {
    //       return (
    //         <div className="App">
    //           <Navbar search={search} dispatch={store.dispatch}/>
    //           <div className="main">
    //             <div className="tabs">
    //               <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
    //               <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
    //             </div>
    //             <div className="list">
    //                 {displayMovies.map((movie,index) => (
    //                   // as we got store in props so need to send the store dispatch via props
    //                     <MovieCard 
    //                     movie={movie} 
    //                     key={ `movie-${index}`} 
    //                     dispatch={store.dispatch}
    //                     isFavourite={this.isMovieFavourite(movie)}
    //                       />
    //                 ))}
    //             </div>
    //             {displayMovies.length === 0 ? <div className="no-movies">No Movies to Display!</div>:null}
    //           </div>
    //         </div>
    //       );
    //     }}
    //   </StoreContext.Consumer>
    // );
    return (
      <div className="App">
        {/* <Navbar search={search} dispatch={this.props.store.dispatch}/> */}
        <Navbar search={search}/>
        {/* No Need to send dispatch via props as we can acces it from the context */}
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
                  // dispatch={this.props.store.dispatch}
                  // as now only props no store we receive
                  dispatch={this.props.dispatch}
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
// ******** access store from the context
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {/* sending the store from context via props */}
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default AppWrapper;

// **************NO NEED OF ABOVE WRAPPER as we will be connect the component ot store



// ******** learning how to use the HOC inorder to avoid wrapper....And how to connect components to redux
// function callback(state) {
//   return {
//     movies: state.movies,
//     search: state.movies,
//   };
// }
// const connectedComponent = connect(callback)(App);
// export default connectedComponent;


// ****** CODE to use connect to connect component to store

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(mapStateToProps)(App);
export default connectedComponent;



