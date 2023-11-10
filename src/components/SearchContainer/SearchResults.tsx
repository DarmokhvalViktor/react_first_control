import {SetURLSearchParams} from "react-router-dom";
import {FC} from "react";

import {IMovie} from "../../interfaces";
import {Movies} from "../MoviesContainer";

interface IProps {
    movies: IMovie[],
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