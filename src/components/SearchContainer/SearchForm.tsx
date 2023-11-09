import {useForm} from "react-hook-form";

import css from "./SearchForm.module.css"
import {FC} from "react";
import {IMovie} from "../../interfaces";

interface IProps {
    movies: IMovie[],
    setMovies: (setMovies: IMovie[]) => void,
    keyword: string,
    setKeyword: (keyword: string) => void
    setQuery: (page: string) => void
}

interface IKeyword {
    keyword: string
}

const SearchForm:FC<IProps> = ({setKeyword, setQuery}) => {
    const {reset, register, handleSubmit, setValue} = useForm();


    const search = (keyword:IKeyword) => {
        setKeyword(keyword.keyword)
        setQuery("1")
        reset()
    }

    return (
        <form className={css.SearchForm} onSubmit={handleSubmit(search)}>
            <input type={"text"} placeholder={"keyword"} {...register("keyword")}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};