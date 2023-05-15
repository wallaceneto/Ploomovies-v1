
function getPoster(path: string) {
    if (path == null) return "";
    const base_url = "https://image.tmdb.org/t/p/w500/";
    return base_url + path;
}

export default { getPoster }