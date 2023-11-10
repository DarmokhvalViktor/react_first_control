import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MoviesPage, SearchPage} from "./pages";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {SearchResultsPage} from "./pages";

const router = createBrowserRouter([
    {path:"", element:<MainLayout/>, children:[
            {index: true, element:<Navigate to={"movies"}/>},
            {path: "movies", element:<MoviesPage/>},
            {path: "movieInfo", element:<MovieInfoPage/>},
            {path: "genres", element:<GenresPage/>},
            {path: "search", element:<SearchPage/>, children:[
                    {path: ":keyword", element: <SearchResultsPage/>}
                ]}
        ]}
])

export {
    router
}