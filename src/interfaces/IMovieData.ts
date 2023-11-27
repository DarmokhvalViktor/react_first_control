import {IMovieInfo} from "./IMovieInfo";

export interface IMovieData {
    page: number,
    total_pages: number,
    total_results: number,
    results: IMovieInfo[]
}