import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Trending.css'

function Trending() {
    const [trending, setTrending] = useState([])
    const history = useHistory()
    const trendingURL = process.env.REACT_APP_TRENDING_URL + process.env.REACT_APP_SECRET_KEY
    useEffect(() => {
        async function fetchTrendning() {
            let request = await axios.get(trendingURL)
            setTrending(request.data.results)
            //console.log(request.data.results)
            return request
        }
        fetchTrendning()

    }, [setTrending, trendingURL])
    return (
        <div className="trendPage">
            <div className="trendTitle">
                <h1>Trending Movies</h1>
            </div>
                <div className="trendFlex">
                    {trending.map(item => (
                        <ul key={item.id} className="trendUl">
                            <div className="trendCard"
                                onClick={() => {
                                history.push({pathname: '/movie',
                                customId: item.id})
                            }}
                            >
                                <img 
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                                alt="" 
                                key={item.id} 
                                className="poster"
                                ></img>
                                <div className="titleCard">
                                    <h2>{item.original_title}</h2>
                                    <h3>Released {item.release_date}</h3>
                                </div>

                            </div>
                        </ul>
                    ))}
                </div>
            
        </div>
    )
}

export default Trending
