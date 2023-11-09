import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../components";


const MoviesPage = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);


    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"

    useEffect(() => {
        movieService.getAll(`${query.get("page")}`).then(({data}) => {
            setMovies(data.results)
        })
    }, [query])

    return (
        <div className={"MoviesPage"} >
            <Movies movies={movies} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesPage};