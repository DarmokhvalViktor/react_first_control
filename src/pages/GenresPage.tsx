import {useEffect, useState} from "react";

import {genresService, movieService} from "../services";
import {Genres, Movies} from "../components";
import {IGenre} from "../interfaces/IGenre";
import {useLocation, useSearchParams} from "react-router-dom";
import {IMovie} from "../interfaces";

const GenresPage = () => {

        //TODO when click on genre, need to highlight
        //TODO when going back, it reverts from one genre to default, just page still same

        const location = useLocation();


        const [movies, setMovies] = useState<IMovie[]>([]);

        const [genreToFind, setGenreToFind] = useState<string>(null);

        const [query, setQuery] = useSearchParams({page: "1"})
        const page = query.get("page") ? query.get("page") : "1"

        const [genres, setGenres] = useState<IGenre[]>([])
        const [pageMax, setPageMax] = useState<number>(null)

        useEffect(() => {
                genresService.getAll().then(({data}) =>{
                        setGenres(data.genres)
                })
        }, [])

        useEffect(() => {
                if(location.state) {
                        setGenreToFind(location.state.genre)
                }
                movieService.getByGenre(genreToFind, page).then(({data}) => {
                        setPageMax(data.total_pages)
                        console.log(data)
                        setMovies(data.results)
                })

        }, [page, genreToFind])


        return (
        <div>
                <Genres genres={genres} setQuery={setQuery} setGenreToFind={setGenreToFind}/>
                <Movies movies={movies} page={page} setQuery={setQuery} pageMax={pageMax}/>
        </div>
        );
};

export {GenresPage};