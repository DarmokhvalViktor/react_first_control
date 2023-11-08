import {IGenre} from "../../interfaces/IGenre";
import {FC} from "react";
import css from "./Genre.module.css"

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div className={`${css.Genre} genre`}>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {Genre};