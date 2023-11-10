import {axiosService} from "./axiosService";
import {urls} from "../constants";

const actorsService = {
    getAll:(filmId: number) => axiosService.get(`${urls.movie}/${filmId}/credits`)
}
export {
    actorsService
}