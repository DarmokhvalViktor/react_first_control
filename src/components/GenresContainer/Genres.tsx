import {FC, useState} from "react";

import {IGenre} from "../../interfaces";
import {Genre} from "./Genre";
import css from "./Genres.module.css"

interface IProps {
    genres: IGenre[],
}
const Genres:FC<IProps> = ({genres}) => {

    const [chosenGenre, setChosenGenre] = useState<string>(null)

    return (
        <div>

        <div className={css.Genres}>
            {genres&& genres.map(genre => <Genre key={genre.id} genre={genre} setChosenGenre={setChosenGenre}/>)}
        </div>
            {chosenGenre && <h1 className={css.ChosenGenre}>Chosen genre: {chosenGenre} </h1>}
        </div>
    );
};

export {Genres};