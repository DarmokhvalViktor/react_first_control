import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from "./SearchForm.module.css"

interface IKeyword {
    keyword: string
}

const SearchForm= () => {

    const {reset, register, handleSubmit} = useForm();

    const navigate = useNavigate();

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