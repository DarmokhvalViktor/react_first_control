import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfo} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../store";

const MovieInfoPage = () => {
    const location = useLocation();

    const id:number = location.state.id;

    const {chosenMovie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
    }, [id, dispatch])


    return (
        <div>
            {chosenMovie && <MovieInfo movie={chosenMovie}/>}
        </div>
    );
};

export {MovieInfoPage};