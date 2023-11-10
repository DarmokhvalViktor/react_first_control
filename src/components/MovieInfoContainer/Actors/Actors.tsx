import {FC} from "react";

import {Actor} from "./Actor";
import {IActor} from "../../../interfaces";
import css from "./Actors.module.css"

interface IProps {
    actors: IActor[]
}
const Actors: FC<IProps> = ({actors}) => {
    return (
        <div>
            <h1>Actors:</h1>
        <div className={css.Actors}>

            {actors && actors.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </div>
        </div>
    );
};

export {Actors};