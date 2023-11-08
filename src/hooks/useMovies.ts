import {useContext} from "react";

import {Context} from "../hoc";

const useMovies = () => {
    const [movies, setMovies] = useContext(Context);

    return {
        movies,
        setMovies
    }
}

export {
    useMovies
}