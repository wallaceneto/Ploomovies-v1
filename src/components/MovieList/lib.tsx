import { ActivityIndicator } from "react-native";

import theme from "../../global/styles/theme";

const loadingIndicator = (isLoading: boolean) => {
    return isLoading ? (
        <ActivityIndicator size={32} color={theme.primaryColor} />
    ) : null;
}

const doSearch = (
    value: string, 
    setPage: Function, 
    setMovies: Function, 
    setSearchText: Function,
    fetchMovies: Function,
    fetchSearch: Function,
) => {
    setPage(1);
    setMovies([]);
    setSearchText(value);
    if (value === "") {
        fetchMovies();
    } else {
        fetchSearch();
    }
}

export default { loadingIndicator, doSearch };