import {useLocation} from "react-router-dom";

import {MovieInfo} from "../components";
import {useEffect, useState} from "react";
import {movieService} from "../services";
import {IMovieInfo} from "../interfaces";

const MovieInfoPage = () => {
    const location = useLocation();

    const movieId:number = location.state.id;
    const [movie, setMovie] = useState<IMovieInfo>(null);

    useEffect(() => {
        movieService.getById(movieId).then(({data}) => {
            setMovie(data)
        })
    }, [movieId])


    return (
        <div>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};