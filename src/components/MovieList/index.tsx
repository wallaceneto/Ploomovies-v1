import React from "react";
import { FlatList, View } from "react-native";
import MovieCard from "../MovieCard";

import styles from "./style";

interface MyProps {
    movies: Movie[]
}

export default function MovieList(props: MyProps) {
    return(
        <View>
            <FlatList
                data={props.movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <MovieCard movie={item} /> }
                style={styles.container}
            />
        </View>
    );
}