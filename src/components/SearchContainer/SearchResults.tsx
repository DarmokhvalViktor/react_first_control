import {SetURLSearchParams} from "react-router-dom";
import {FC} from "react";

import {IMovieInfo} from "../../interfaces";
import {Movies} from "../MoviesContainer";

interface IProps {
    movies: IMovieInfo[],
    page: string,
    setQuery: SetURLSearchParams,
    pageMax: number
}
const SearchResults:FC<IProps> = ({movies, page, setQuery, pageMax}) => {

    return (
        <div>
            <Movies movies={movies} page={page} setQuery={setQuery} pageMax={pageMax}/>
        </div>
    );
};

export {SearchResults};