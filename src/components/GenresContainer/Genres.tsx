import {FC, useState} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {IGenre} from "../../interfaces";
import {Genre} from "./Genre";
import css from "./Genres.module.css"

interface IProps {
    genres: IGenre[],
    setQuery: SetURLSearchParams,
    setGenreToFind: (genreToFind: string) => void
}
const Genres:FC<IProps> = ({genres, setQuery, setGenreToFind}) => {

    const [chosenGenre, setChosenGenre] = useState<string>(null)

    return (
        <div>

        <div className={css.Genres}>
            {genres&& genres.map(genre => <Genre key={genre.id} genre={genre} setQuery={setQuery}
                                                 setGenreToFind={setGenreToFind} setChosenGenre={setChosenGenre}/>)}
        </div>
            {chosenGenre && <h1 className={css.ChosenGenre}>Chosen genre: {chosenGenre} </h1>}
        </div>
    );
};

export {Genres};