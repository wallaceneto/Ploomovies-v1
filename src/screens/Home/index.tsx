import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";

export default function Home() {
    return (
        <View>
            <Header />
            <MovieList />
        </View>
    );
}