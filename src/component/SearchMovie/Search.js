import axios from 'axios'
import React, { useState } from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
function Search() {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const history = useHistory();

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        let encodedSearch = encodeURIComponent(search)
        console.log(encodedSearch)
        const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&query=${encodedSearch}&page=1&include_adult=false`)
        let slice = request.data.results.slice(0,5)
        setSearchResult(slice)
        console.log(request.data.results)
        return request
    }
    return (
        <div className="Search">
            <form>
                <input type="text" 
                    placeholder="Search Movie" 
                    className="searchField" 
                    onChange={handleChange}> 
                </input>
                    <button type="submit" className="searchButton" onClick={handleSubmit}><AiOutlineSearch /></button>
            </form>
            {searchResult.map(item => (
                <ul className="movieList">
                    <div className="movieDiv"
                    onClick={() => {
                        history.push({pathname:'/movie',
                        customId: item.id})
                    }} 
                    >
                        <div className="posterDiv">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" key={item.id} className="searchPoster"></img>

                        </div>
                        <div className="titleOverview">
                            <h2>{item.original_title}</h2>
                            <p>{item.overview}</p>

                        </div>
                    </div>
                </ul>
            ))}
        </div>
    )
}

export default Search
