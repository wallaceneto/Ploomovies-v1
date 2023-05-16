import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import MovieCard from "../MovieCard";
import { getMovies, searchMovie } from "../../services/getData";

import styles from "./style";
import lib from "./lib";
import SearchInput from "../SearchInput";
import EmptyResult from "../EmptyResult";

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchMovies();
    }, []);
    
    const fetchMovies = async () => {
        if (loading) return;
        setLoading(true);

        const moviesData = await getMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...moviesData]);
        setPage(page + 1);
        setLoading(false);
    };

    const fetchSearch = async () => {
        if (loading) return;
        setLoading(true);

        const movieData = await searchMovie(searchText);
        setMovies(movieData);
        setLoading(false);
    }

    return(
        <View style={styles.container}>
            <SearchInput textValue={searchText} setTextValue={
                (value: string) => lib.doSearch(value, setPage, setMovies, setSearchText, fetchMovies, fetchSearch)
            } />
            <FlatList
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <MovieCard movie={item} /> }
                onEndReached={searchText === "" ? fetchMovies : null}
                onEndReachedThreshold={0.1}
                ListFooterComponent={lib.loadingIndicator(loading)}
                ListFooterComponentStyle={styles.loading}
                ListEmptyComponent={!loading ? <EmptyResult /> : null}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}