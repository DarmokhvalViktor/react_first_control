import {useEffect, useState} from "react";

import {SearchForm, SearchResults} from "../components";
import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {useSearchParams} from "react-router-dom";

const SearchPage = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    let [keyword, setKeyword] = useState<string>(null)

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"
    if(!keyword) {
        keyword="war"
    }

    useEffect(() => {
        movieService.getByKeyword(keyword, page).then(({data}) => {
            setMovies(data.results)
        })
    }, [page, keyword])

    return (
        <div>
            <SearchForm movies={movies} setMovies={setMovies} keyword={keyword} setKeyword={setKeyword} setQuery={setQuery}/>
            <SearchResults movies={movies} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {SearchPage};