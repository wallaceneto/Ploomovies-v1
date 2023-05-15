import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import { getMovies } from "../../services/getData";

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
          const moviesData = await getMovies(3);
          setMovies(moviesData);
        };
    
        fetchMovies();
    }, []);

    return (
        <View>
            <Header />
            <MovieList movies={movies} />
        </View>
    );
}