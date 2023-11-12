import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {movieService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../components";

const ChosenGenre = () => {

    const {genre} = useParams<string>();

    const [pageMax, setPageMax] = useState<number>(null)
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"


    useEffect(() => {
        if(genre === "") {
            movieService.getAll().then(({data}) => {
                setPageMax(data.total_pages)
                setMovies(data.results)
            })
        } else {
            movieService.getByGenre(genre, page).then(({data}) => {
                setPageMax(data.total_pages)
                setMovies(data.results)
            })
        }

    }, [page, genre])

    return (
        <div>
            <Movies movies={movies} page={page} setQuery={setQuery} pageMax={pageMax}/>
        </div>
    );
};

export {ChosenGenre};