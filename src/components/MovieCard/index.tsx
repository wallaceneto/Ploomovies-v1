import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import placeholder from "../../../assets/poster-placeholder.png";
import styles from "./style";
import lib from "./lib";
import theme from "../../global/styles/theme";

export default function MovieCard({ movie }: { movie: Movie }) {
    const imageURL = lib.getPoster(movie.poster_path);

    return (
        <TouchableOpacity style={styles.container} onPress={() => {}}>
            { imageURL == "" 
                ? <Image source={placeholder} style={styles.poster} />
                : <Image source={{ uri: imageURL }} style={styles.poster} />
            }
            <View style={styles.content}>
                <Text style={styles.title}>{ movie.title }</Text>
                <View style={styles.genres}>
                    <FlatList
                        data={movie.genre_ids}
                        keyExtractor={item => item.toString()}
                        renderItem={({ item }) => <Text>{ item }</Text>}
                        horizontal
                        scrollEnabled={false}
                    />
                </View>
                <View style={styles.infos}>
                    <View style={styles.voteDisplay}>
                        <Text style={styles.voteText}>{ movie.vote_average.toFixed(1) }</Text>
                    </View>
                </View>
            </View>
            <View style={styles.favButton}>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons
                        name= {"heart-outline"}
                        size={30}
                        color={theme.primaryColor}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}