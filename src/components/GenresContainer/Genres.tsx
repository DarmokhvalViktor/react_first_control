import {FC} from "react";

import {IGenre} from "../../interfaces/IGenre";
import {Genre} from "./Genre";
import css from "./Genres.module.css"
import {SetURLSearchParams} from "react-router-dom";

interface IProps {
    genres: IGenre[],
    setQuery: SetURLSearchParams,
    setGenreToFind: (genreToFind: string) => void
}
const Genres:FC<IProps> = ({genres, setQuery, setGenreToFind}) => {
    return (
        <div className={css.Genres}>
            {genres&& genres.map(genre => <Genre key={genre.id} genre={genre} setQuery={setQuery} setGenreToFind={setGenreToFind}/>)}
        </div>
    );
};

export {Genres};