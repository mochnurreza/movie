import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
import movieTrailer from 'movie-trailer'
import './Row.css'

function Row({title, fetchUrl, isLargeRow = false}) {
    const posterBaseUrl = "http://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState('')

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchUrl)
            setMovies(req.data.results)
            return req
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '600',
        width: '100',
        playerVars: {
            autoplay:1,
        }
    }
    const handleClick = (movie) => {
        if(trailer){
            setTrailer('')
        } else {
            movieTrailer(movie?.name || movie?.title || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailer(urlParams.get('v'))
        }).catch((err) => console.log(err))
    }
}
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                alt={movie.name}
                src={`${posterBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                onClick={() => handleClick(movie)}
                key={movie.id}/>
            )
    )}     
            </div>
            {trailer && <YouTube videoId={trailer} opt={opts} className="youtube_trailer"/>}
        </div>
    )
}

export default Row
