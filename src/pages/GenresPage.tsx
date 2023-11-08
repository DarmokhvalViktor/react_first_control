import {useEffect, useState} from "react";

import {genresService} from "../services";
import {Genres} from "../components";
import {IGenre} from "../interfaces/IGenre";
import {useSearchParams} from "react-router-dom";

const GenresPage = () => {

        const [query, setQuery] = useSearchParams({page: "1"})
        const page = query.get("page") ? query.get("page") : "1"

        const [genres, setGenres] = useState<IGenre[]>([])
        useEffect(() => {
                genresService.getAll().then(({data}) =>{
                        console.log(genres)
                        setGenres(data.genres)
                })
        }, [])
        console.log(genres)

        return (
        <div>
                <Genres genres={genres}/>
        {/*        тут має виклик бути компоненти Movies, а зверху useEffect в сервісі movieService додати пошук за жанрами фільмів*/}
        </div>
        );
};

export {GenresPage};