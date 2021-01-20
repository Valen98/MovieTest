import Axios from 'axios'

const MovieApi = Axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_SECRET_KEY}`
})

export default MovieApi