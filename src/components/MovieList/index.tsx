import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import MovieCard from "../MovieCard";
import { getMovies } from "../../services/getData";

import styles from "./style";
import lib from "./lib";

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
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

    return(
        <>
            <FlatList
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <MovieCard movie={item} /> }
                style={styles.container}
                onEndReached={fetchMovies}
                onEndReachedThreshold={0.1}
                ListFooterComponent={lib.loadingIndicator(loading)}
                ListFooterComponentStyle={styles.loading}
            />
        </>
    );
}