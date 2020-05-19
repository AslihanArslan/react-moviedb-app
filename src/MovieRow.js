import React from 'react'

class MovieRow extends React.Component {
  vievMovie(){
    const url = "https://www.themoviedb.org/movie/" + this.props.movies.id
    window.location.href = url
  }

    render() {
        return <table key={this.props.movies.id}>
        <tbody>
        <tr>
          <td style={{paddingLeft:15}}>
            <img alt="poster" width="120" src={this.props.movies.poster_src}/>
          </td>
          <td style={{paddingLeft:35}}>
            <h3>{this.props.movies.title}</h3>
            <p style={{width:800}}><span>{this.props.movies.overview}</span></p>
            <input class="button button1" type="button" onClick={this.vievMovie.bind(this)} value="View"/>
          </td>
        </tr>
      </tbody>
    </table>
    }
}

export default MovieRow;