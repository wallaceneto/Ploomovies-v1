interface Movie {
    id: number,
    title: string,
    release_date: string,
    overview: string,
    poster_path: string,
    vote_average: number,
    genre_ids: number[],
    isFavorite: boolean,
}