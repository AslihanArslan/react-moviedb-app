import React, { Component } from "react";
import "./App.css";
import MovieRow from './MovieRow.js'
import $ from 'jquery';
//import * as $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch("avengers")
  }
  performSearch(searchTerm){
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=<yourKey>&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results
        
        var movieRows = []

        results.forEach((movies) => {
          movies.poster_src =  "https://image.tmdb.org/t/p/w185" +movies.poster_path
          //console.log(movies.title)
          const movieRow = <MovieRow key={movies.id} movies={movies} />
          movieRows.push(movieRow)
        });
        this.setState({ rows:movieRows })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const searchTerm = event.target.value
    const boundObject = this
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="80" alt="app icon" src="primary-green-logo.svg" />
              </td>
              <td width="8"></td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
          }} onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter search term"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
