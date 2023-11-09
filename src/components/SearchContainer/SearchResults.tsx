
import {IMovie} from "../../interfaces";
import {FC} from "react";
import {Movies} from "../MoviesContainer";
import {SetURLSearchParams} from "react-router-dom";

interface IProps {
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}
const SearchResults:FC<IProps> = ({movies, page, setQuery}) => {

    return (
        <div>
            <Movies movies={movies} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {SearchResults};