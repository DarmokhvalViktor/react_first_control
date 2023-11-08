import {useEffect, useState} from "react";

import {movieService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../components";
import {useSearchParams} from "react-router-dom";

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
        <div className={"MoviesPage"}>
            <Movies movies={movies} setMovies={setMovies} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesPage};