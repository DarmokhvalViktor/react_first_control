import {useEffect, useState} from "react";

import {SearchForm, SearchResults} from "../components";
import {IMovie} from "../interfaces";
import {movieService} from "../services";

const SearchPage = () => {

    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        movieService.getAll("1").then(({data}) => {
            setMovies(data.results)
        })
    }, [])

    return (
        <div>
            <SearchForm movies={movies} setMovies={setMovies}/>
            <SearchResults movies={movies}/>
        </div>
    );
};

export {SearchPage};