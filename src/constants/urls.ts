const baseURL = "https://api.themoviedb.org/3"

const movies = "/discover/movie"
const movie = `/movie`
const genres = "/genre/movie/list"
const search = "/search/movie"

const urls = {
    base:movies,
    movie,
    search,
    genres
}

export {
    baseURL,
    urls
}