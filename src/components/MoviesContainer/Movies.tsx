import {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Movie} from "./Movie";
import css from "./Movies.module.css"

interface IProps {
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}

const Movies: FC<IProps> = ({movies, page, setQuery}) => {

    const previous = (): void => {
        setQuery({page: `${+page - 1}`})
    }

    const next = (): void => {
        setQuery({page: `${+page + 1}`})
    }

    const firstPage = (): void => {
        setQuery({page: `1`})
    }

    const pageNumber: number = +page

    return (
        <div>
            <div className={css.Buttons}>
                <button disabled={pageNumber <= 1}
                        onClick={previous}>{ pageNumber > 1 ? `Back to page ${pageNumber - 1}` : "On first page" }</button>
                <div id={"pageCounter"}>{`page: ${pageNumber} of 500`}</div>

                <button disabled={pageNumber === 1} onClick={firstPage}>First Page</button>

                <button disabled={pageNumber >= 500}
                        onClick={next}>{pageNumber !== 500 ? `Forward to page ${pageNumber + 1}` : "On last page"}</button>
            </div>
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};