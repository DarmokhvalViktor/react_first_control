import {FC, useEffect, useState} from "react";
import {Rating} from "@mui/material";

import css from "./MovieInfo.module.css"
import "./MovieInfo.module.css"
import {IActor, IMovieInfo} from "../../interfaces";
import {IGenre} from "../../interfaces";
import gif from "../Header/image/pulp-fiction-john-travolta.gif"
import {useNavigate} from "react-router-dom";
import {actorsService} from "../../services";
import {Actors} from "./Actors";

interface IProps {
    movie: IMovieInfo
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {
        adult, original_title, original_language, overview,
        title, release_date, vote_average, vote_count, poster_path,
        runtime, genres, tagline, id
    } = movie

    const genresArry: IGenre[] = genres;
    const navigate = useNavigate();
    console.log(genresArry)

    //trending movied TODO

    const goTo = (id: string) => {
        navigate("/genres", {state: {genre: id}})
    }
    //TODO navigate to genres

    const [actors, setActors] = useState<IActor[]>()

    useEffect(() => {
        actorsService.getAll(id).then(({data}) => {
            setActors(data.cast)
        })
    }, [])

    return (
        <div>
            <div className={css.MovieInfo} id={"movieInfoContainer"}>

                {poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/> :
                    <img src={gif} alt={"no poster"}/>}

                <div className={css.wrapBlock} id={"wrapBlock"}>
                    {adult ? <div>adult: {adult}</div> : ""}
                    <div>original_title: <br/> {original_title}</div>
                    <div>title: <br/> {title}</div>
                    <div className={css.genresBlock}>
                        {genresArry.map(genre => (
                                //TODO change to onclick
                                <div className={css.genreInfo} id={"genreInfo"} key={genre.id}
                                     onClick={() => goTo(`${genre.id}`)}>{genre.name}</div>
                            )
                        )}
                    </div>
                    <div>original_language: <br/> {original_language}</div>
                    <div>overview:<br/> {overview}</div>
                    <div>release_date: <br/> {release_date}</div>
                    <div>
                        <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} readOnly/>
                    </div>
                    <div>vote_count: <br/> {vote_count}</div>
                    <div>runtime: <br/> {runtime} minutes</div>
                    <div>tagline: <br/> {tagline}</div>
                </div>

            </div>
            <Actors actors={actors}/>
        </div>


    );
};

export {MovieInfo};