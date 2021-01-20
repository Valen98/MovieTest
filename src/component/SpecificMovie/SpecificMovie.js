import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import './SpecificMovie.css'

function SpecificMovie() {
    const location = useLocation()
    const [movie, setMovie] = useState([])

    useEffect(() => {
     async function fetchMovies(){
         let request = await Axios.get(`https://api.themoviedb.org/3/movie/${location.customId}?api_key=${process.env.REACT_APP_SECRET_KEY}`)
         setMovie(request.data)
         console.log(request.data)
         return request
     }
     fetchMovies()
    }, [])
    return (
        <div className="MoviePage">
            <div className="singlePoster">
                <img alt="" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            </div>
            <div className="movieInfo">
                <h1>{movie.original_title}</h1>
                <h3 id="tagline">{movie.tagline}</h3>
                <br/>
                <p>{movie.overview}</p>
                <br />
                <h4>Released: {movie.release_date}</h4>
                <br />
                <h4>{movie.runtime} Minutes</h4>
                <br/>
                <h4>Popularity: {movie.popularity}</h4>
            </div>
        </div>
    )
}

export default SpecificMovie
