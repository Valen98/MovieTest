import React from 'react'
import { useHistory } from 'react-router-dom'
import Search from '../SearchMovie/Search'
import './NavBar.css'

function NavBar() {
    const history = useHistory()
    return (
        <div className="nav">
            <h1 id="logo" onClick={() => {
                history.push('/')
            }}>IMDb</h1>
            <Search></Search>
        </div>
    )
}

export default NavBar
