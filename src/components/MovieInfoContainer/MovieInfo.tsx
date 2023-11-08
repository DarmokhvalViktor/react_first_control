import {FC} from "react";
import {Rating} from "@mui/material";

import css from "./MovieInfo.module.css"
import "./MovieInfo.module.css"
import {IMovieInfo} from "../../interfaces";
import {IGenre} from "../../interfaces/IGenre";

interface IProps {
    movie: IMovieInfo
}
const MovieInfo:FC<IProps> = ({movie}) => {
    const {adult, original_title, original_language, overview, popularity,
        title, release_date, vote_average, vote_count, poster_path,
        runtime, genres, status, tagline, } = movie
    const genresArry:IGenre[] = genres;
    console.log(genresArry)

    return (
        <div className={css.MovieInfo} id={"movieInfoContainer"}>

                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>

            <div className={css.wrapBlock} id={"wrapBlock"}>
                {adult ? <div>adult: {adult}</div> : ""}
                <div>original_title: <br/> {original_title}</div>
                <div className={css.genresBlock}>
                    {genresArry.map(genre => <div className={css.genreInfo} id={"genreInfo"} key={genre.id}>{genre.name}</div>)}
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
    );
};

export {MovieInfo};