import {useEffect, useState} from "react";

import {SearchForm, SearchResults} from "../components";
import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {Outlet, useSearchParams} from "react-router-dom";

const SearchPage = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    let [keyword, setKeyword] = useState<string>(null)

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"

    console.log(keyword)

    const [pageMax, setPageMax] = useState<number>(null)

    useEffect(() => {
        if(!keyword) {
            movieService.getByKeyword("war", page).then(({data}) => {
                setPageMax(data.total_pages)
                console.log(data)
                setMovies(data.results)
            })
        } else{

        movieService.getByKeyword(keyword, page).then(({data}) => {
            setPageMax(data.total_pages)
            console.log(data)
            setMovies(data.results)
        })
        }
    }, [page, keyword])

    return (
        <div>
            <SearchForm movies={movies} setMovies={setMovies} keyword={keyword} setKeyword={setKeyword} setQuery={setQuery}/>
            <Outlet/>
            <SearchResults movies={movies} page={page} setQuery={setQuery} pageMax={pageMax}/>
        </div>
    );
};

export {SearchPage};