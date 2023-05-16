import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./style";
import { getGenres } from "../../services/getData";

interface MyProps {
    genreId: number,
}

export default function Tag(props: MyProps) {
    const [genreName, setGenreName] = useState("undefined");

    useEffect(() => {
        const fetchGenres = async (id: number) => {
            const genresData = await getGenres();
            const genre = genresData.find((genre: Genre) => genre.id == id);
            if (genre) setGenreName(genre.name);
        }

        fetchGenres(props.genreId);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{genreName}</Text>
        </View>
    );
}