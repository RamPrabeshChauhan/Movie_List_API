import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8b0f9c3d";

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }

    useEffect( () => {
        searchMovies("Batman")
    }, [] );
    
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search for movies" 
                />
                <img 
                    src={SearchIcon}
                    alt="search" //link to imput value
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )}

        </div>
    )
} 

export default App;

// 8b0f9c3d
