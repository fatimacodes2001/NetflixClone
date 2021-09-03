import React, { useEffect, useState }  from "react";
import axios from "./axios";
import "./Row.css"
const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row(props){
    const [movies, setMovies] = useState([])
    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(props.fetchUrl)
            setMovies(request.data.results)
            

        }
        fetchData()

    }, [])

    return(
        <div className="row">

            <h2>{ props.title }</h2>
            <div className="row-posters">
            {
                movies.map( m => {
                    if(m.title === undefined){
                        return (<div className="card">
                                <img src={`${baseUrl}${props.isLargeRow? m.poster_path: m.backdrop_path}`}/>
                               </div>)
                        
                    }
                    else{
                        return (<div className="card">
                            <img src={`${baseUrl}${props.isLargeRow? m.poster_path: m.backdrop_path}`}  />
                           </div>)
                    }
                    
                })
            }
            </div>
            

        </div>
    )
}

export default Row