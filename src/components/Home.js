import React from 'react'
import request from '../Request'
import Banner from './Banner'
import Navbar from './Navbar'
import Row from './Row'
import './home.css'

function Home() {
    return (
        <div className="homescreen">
            <Navbar/>
            <Banner/>
            <Row 
            title= "NETFLIX ORIGINAL"
            fetchUrl = {request.fetchNetflixOriginals}
            isLargeRow/>
            <Row 
            title="Sedang Tren Sekarang"
            fetchUrl={request.fetchTrending}/>
            <Row 
            title="Rating Terbaik"
            fetchUrl={request.fetchTopRated}/>
            <Row 
            title="Film Action"
            fetchUrl={request.fetchActionMovies}/>
            <Row 
            title="Film Komedi"
            fetchUrl={request.fetchComedyMovies}/>
            <Row 
            title="Film Horor"
            fetchUrl={request.fetchHorrorMovies}/>
            <Row 
            title="Film Romansa"
            fetchUrl={request.fetchRomanceMovies}/>
            <Row 
            title="Film Dokumenter"
            fetchUrl={request.fetchDocumentaries}/>
        </div>
    )
}

export default Home
