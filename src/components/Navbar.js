import React from "react";
// import {StoreContext} from '../index';
import { addMovieToList, handleMovieSearch } from '../actions';
import {connect} from '../index';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { showSearchResults, results: movie } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleSearchChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
// Since here Also in Navbar we can see method out of render that uses the store......
// So again meed to make wrapper and send the store from the context as props.....
// Also the now the props sent from the App will be getting to this wrapper class hence we need to forward them to navbar component.

// export default Navbar;

// ***** NOT using the context we will use the connect to connect to store

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           // sending the store from the context as props also forwarding the props received from the app
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

// export default NavbarWrapper;

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);