import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './StartPage.css'

function StartPage() {
    const [movie, setMovie] = useState([])
    const history = useHistory()

    useEffect(() => {
     async function fetchMovies(){
         let request = await Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_SECRET_KEY}`)
         setMovie(request.data)
         //console.log(request)
         return request
     }
     fetchMovies()
    }, [])

    console.log(movie)

    return (
        <div className="mainPage">
            <div className="bg-image" style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` + ")"}} >

            </div>
            <div className="movies" style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` + ")"}}>
                <div className="title"
                    onClick={() => {
                        history.push({pathname:'/movie',
                        customId: movie.id})
                    }}
                >
                    <h1>{movie.original_title}</h1>
                    <p>Released {movie.release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default StartPage
