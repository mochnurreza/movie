import axios from '../axios'
import React, { useEffect, useState } from 'react'
import request from '../Request'
import './banner.css'

const posterBaseUrl = "http://image.tmdb.org/t/p/original"

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals)
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length -1)])
        }
        fetchData()
    }, [])
    function turncate(string, n){
        return string?.length > n ? string.substring(0, n-1)+ '...':string
    }
    return (
        <header className="banner" style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${posterBaseUrl}${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',}}>
            <div className="banner_content">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.originalName}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">{turncate(movie?.overview, 150)}</h1>
                {/* <div className="banner--fadeButton"/> */}
            </div>
        </header>
    )
}

export default Banner
