import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(request => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTYwMTM5YzllOTFlZmU1MDBlMDhiYzIyMjU4NGYzMCIsInN1YiI6IjY1NDYyNzJhMjg2NmZhMDExYmNmMDU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q6RV2ViTAPc8QLOikq-iNgovFGls9LOoXpiwe1IkQE4"
    request.headers.Authorization = `Bearer ${token}`;
    return request;
})

export {
    axiosService
}