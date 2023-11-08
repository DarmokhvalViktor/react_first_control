import {IGenre} from "../../interfaces/IGenre";
import {FC} from "react";
import css from "./Genre.module.css"
import {SetURLSearchParams, useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre,
    setQuery: SetURLSearchParams,
    setGenreToFind: (genreToFind: string) => void
}
const Genre:FC<IProps> = ({genre, setQuery, setGenreToFind}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

    function searchGenre() {
        setGenreToFind(`${id}`)
        setQuery({page: `1`})
    }

    return (
        <div className={`${css.Genre} genre`} onClick={searchGenre}>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {Genre};