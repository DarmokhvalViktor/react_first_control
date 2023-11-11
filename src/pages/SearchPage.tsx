
import {SearchForm,} from "../components";
import {Outlet} from "react-router-dom";
import {SearchResultsPage} from "./SearchResultsPage";

const SearchPage = () => {


    return (
        <div>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};

export {SearchPage};