import { api } from "./api";

const api_key = "api_key=8133f478aa23d9334924c4efb248446a";
const language = "language=pt-BR";

async function getMovies(page: number) {
    const movies = await api.get(`/discover/movie?${api_key}&${language}&page=${page}`);
    return movies.data.results;
}

async function searchMovie(query: string) {
    const movies = await api.get(`/search/movie?${api_key}&query=${query}&${language}`);
    return movies.data.results;
}

async function getActors(movieId: number) {
    const actors = await api.get(`/movie/${movieId}/credits?${api_key}&${language}`);
    return actors.data.cast;
}

async function getGenres() {
    const genres = await api.get(`/genre/movie/list?${api_key}&${language}`);
    return genres.data.genres;
}

export { getMovies, searchMovie, getActors, getGenres }
