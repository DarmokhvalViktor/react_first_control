import {useEffect, useState} from "react";

import {genresService, movieService} from "../services";
import {Genres, Movies} from "../components";
import {IGenre} from "../interfaces/IGenre";
import {useSearchParams} from "react-router-dom";
import {useMovies} from "../hooks";
import {IMovie} from "../interfaces";

const GenresPage = () => {

        const {movies:moviesFromContext} = useMovies();

        const [movies, setMovies] = useState<IMovie[]>([]);

        let[genreToFind, setGenreToFind] = useState<string>(null);

        const [query, setQuery] = useSearchParams({page: "1"})
        const page = query.get("page") ? query.get("page") : "1"

        useEffect(() => {
                movieService.getByGenre(genreToFind, page).then(({data}) => {
                        console.log(data.results)
                        setMovies(data.results)
                })
        }, [page, genreToFind])


        const [genres, setGenres] = useState<IGenre[]>([])
        useEffect(() => {
                genresService.getAll().then(({data}) =>{
                        console.log(genres)
                        setGenres(data.genres)
                })
        }, [])

        return (
        <div>
                <Genres genres={genres} setQuery={setQuery} setGenreToFind={setGenreToFind}/>
                {<Movies movies={movies} page={page} setQuery={setQuery}/>}
        {/*        тут має виклик бути компоненти Movies, а зверху useEffect в сервісі movieService додати пошук за жанрами фільмів*/}
        </div>
        );
};

export {GenresPage};