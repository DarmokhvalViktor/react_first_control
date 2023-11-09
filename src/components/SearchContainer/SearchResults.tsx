
import {IMovie} from "../../interfaces";
import {FC} from "react";
import {Movies} from "../MoviesContainer";

interface IProps {
    movies: IMovie[]
}
const SearchResults:FC<IProps> = ({movies}) => {
    return (
        <div>
            <Movies movies={movies} />
        </div>
    );
};

export {SearchResults};