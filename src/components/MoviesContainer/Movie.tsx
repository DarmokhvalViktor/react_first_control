import {FC, useState} from "react";
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import css from "./Movie.module.css"
import "./Movie.module.css"

interface IProps {
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id, title, vote_average,  poster_path} = movie;

    const navigate = useNavigate();

    const toMovie = () => {
        navigate("/movieInfo", {state: {id}})
    }


    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={css.Movie} id={"container"} onClick={toMovie}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <div id={"movieTitle"}>{title}</div>

            <div id={"starRating"} onMouseEnter={togglePopup} onMouseLeave={togglePopup}>
                <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} readOnly/>
                { isPopupOpen &&
                    (<div>
                        <span> Rating: {vote_average}</span>
                    </div>)
                }
            </div>


        </div>
    );
};

export {Movie};