import {useForm} from "react-hook-form";

import css from "./SearchForm.module.css"
import {useNavigate, useSearchParams} from "react-router-dom";

interface IKeyword {
    keyword: string
}

const SearchForm= () => {

    const {reset, register, handleSubmit} = useForm();

    // const [query, setQuery] = useSearchParams();
    const navigate = useNavigate();

    //передати через сторінку і значення в url

    const search = (searchKeyword:IKeyword) => {
        const keyword = searchKeyword.keyword
        navigate(`${keyword}`)
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