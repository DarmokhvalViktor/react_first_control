import {useContext} from "react";

import {Context} from "../hoc";

const usePage = () => {
    const [page, setPage] = useContext(Context);

    return {
        page,
        setPage
    }
}

export {
    usePage
}