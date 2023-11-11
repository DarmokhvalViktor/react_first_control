import {IGenre} from "../../interfaces";
import {FC} from "react";
import css from "./Genre.module.css"
import {SetURLSearchParams, useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre,
    setQuery: SetURLSearchParams,
    setGenreToFind: (genreToFind: string) => void
    setChosenGenre: (setChosenGenre: string) => void
}
const Genre:FC<IProps> = ({genre, setQuery, setGenreToFind, setChosenGenre}) => {

    const {id, name} = genre;

    function searchGenre() {
        setGenreToFind(`${id}`)
        setQuery({page: `1`})
        setChosenGenre(name)
    }

    return (
        <div className={`${css.Genre} genre`} onClick={searchGenre}>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {Genre};