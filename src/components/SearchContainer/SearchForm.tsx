import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import css from "./SearchForm.module.css"
import {movieService} from "../../services";
import {FC, useState} from "react";
import {IMovie} from "../../interfaces";

interface IProps {
    movies: IMovie[],
    setMovies: (setMovies: IMovie[]) => void
}

const SearchForm:FC<IProps> = ({movies, setMovies}) => {
    const {reset, register, handleSubmit, setValue} = useForm();

    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page") ? query.get("page") : "1"

    // useEffect((keyword:string) => {
    //     movieService.getByKeyword(keyword, page).then(({data}) => {
    //
    //     })
    // })
    // const [movies, setMovies] = useState<IMovie[]>([])

    const search = async (keyword:string) => {
        await movieService.getByKeyword(keyword, page).then(({data}) => {
            console.log(data.results)
            setMovies(data.results)
        })
    }
    console.log(movies)

    return (
        <form className={css.SearchForm} onSubmit={handleSubmit(search)}>
            <input type={"text"} placeholder={"keyword"} {...register("keyword")}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};