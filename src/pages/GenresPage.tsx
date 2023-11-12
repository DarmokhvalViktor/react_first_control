import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {genresService} from "../services";
import {Genres} from "../components";
import {IGenre} from "../interfaces";

const GenresPage = () => {

        const [genres, setGenres] = useState<IGenre[]>([])

        useEffect(() => {
                genresService.getAll().then(({data}) =>{
                        setGenres(data.genres)
                })
        }, [])

        return (
        <div>
                <Genres genres={genres}/>
                <Outlet/>
        </div>
        );
};

export {GenresPage};