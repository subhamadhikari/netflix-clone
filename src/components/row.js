import React , {useState,useEffect} from 'react'
import axios from "./../axios"
import "./../css/row.css"

function Row({title,fetchUrl,isLargeRow}) {

const imgURL = "https://image.tmdb.org/t/p/original/"
const [movies,setMovies] = useState([])

useEffect(() => {
    //if [] , run once when the row loads, dont run again
    async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
        // return request
    }

    fetchData()
},[fetchUrl])
 

  return (
    <div className='row'>
        {title}

        <div className='row_posters'>
        {
            movies.map((movie,index) => {
                return <img key={index} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${imgURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}/>
            })
        }
        </div>
    </div>
  )
}

export default Row