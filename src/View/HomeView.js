import React from 'react'
import NavBar from '../component/NavBar/NavBar'
import StartPage from '../component/StartPage/StartPage'
import Trending from '../component/Trending/Trending'
function HomeView() {
    return (
        <div className="mainPage">
            <NavBar></NavBar>
            <StartPage></StartPage>
            <Trending></Trending>
        </div>
    )
}

export default HomeView
