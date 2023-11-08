import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieData, IMovieInfo} from "../interfaces";

const movieService = {
    getAll: (page: string ="1"): IRes<IMovieData> => axiosService.get(urls.base, {params: {page}}),
    getById: (id: number) : IRes<IMovieInfo> => axiosService.get(`${urls.movie}/${id}`),
    getByGenre: (genre: string, page: string = "1") : IRes<IMovieData> => axiosService.get(urls.base, {params: {with_genres: genre, page}})

}

export {
    movieService
}