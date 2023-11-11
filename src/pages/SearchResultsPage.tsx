import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {useParams, useSearchParams} from "react-router-dom";
import {Movies} from "../components";

const SearchResultsPage = () => {

    const {keyword} = useParams<string>();


    const [movies, setMovies] = useState<IMovie[]>([])

    const [pageMax, setPageMax] = useState<number>(null)
    // let [keyword, setKeyword] = useState<string>(null)

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"

    useEffect(() => {
        if(keyword === ":keyword") {
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
            <Movies setQuery={setQuery} page={page} pageMax={pageMax} movies={movies}/>
        </div>
    );
};

export {SearchResultsPage};