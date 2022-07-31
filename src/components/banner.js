import React,{useState,useEffect} from 'react'
import "./../css/banner.css"
import axios from "./../axios"
import requests from '../request'

function Banner() {

    const [movie,setMovie] = useState([])
    const imgURL = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchBanner);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])

            console.log(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
        }
        fetchData()
    },[])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"...":str
    }
  return (
      <header className='banner' style={{
          backgroundSize:"cover",
          backgroundImage:`url("${imgURL}${movie?.backdrop_path}")`,
          backgroundPosition:"center"
      }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title||movie?.name||movie?.original_name}
            </h1>

            <div className='bannner_buttons'>
                <button className='banner_buttton'>Play</button>
                <button className='banner_buttton'>My List</button>
            </div>

            <h1 className='banner_description'>
                {truncate(movie?.overview,150)}
            </h1>   
        </div>  

        <div className='banner_fadeBottom'/>
      </header>
  )
}

export default Banner