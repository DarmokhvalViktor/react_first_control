import {Outlet} from "react-router-dom";

import {SearchForm} from "../components";

const SearchPage = () => {
    return (
        <div>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};

export {SearchPage};