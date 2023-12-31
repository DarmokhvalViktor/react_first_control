import {IMovie} from "./IMovie";

export interface IMovieData {
    page: number,
    total_pages: number,
    total_results: number,
    results: IMovie[]
}