import {useEffect, useState} from "react";

import {movieService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../components";
import {useSearchParams} from "react-router-dom";


const MoviesPage = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);


    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"
    const [pageMax, setPageMax] = useState<number>(500)

    useEffect(() => {
        movieService.getAll(`${query.get("page")}`).then(({data}) => {
            console.log(data)
            setMovies(data.results)
        })
    }, [query])

    return (
        <div className={"MoviesPage"} >
            <Movies movies={movies} page={page} setQuery={setQuery} pageMax={pageMax}/>
        </div>
    );
};

export {MoviesPage};