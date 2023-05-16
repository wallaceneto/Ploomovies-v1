import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import MovieModal from "../modals/MovieModal";
import placeholder from "../../../assets/poster-placeholder.png";
import theme from "../../global/styles/theme";
import getPoster from "../../global/lib/getPoster";
import Tag from "../Tag";
import styles from "./style";
import lib from "./lib";

export default function MovieCard({ movie }: { movie: Movie }) {
    const imageURL = getPoster(movie.poster_path);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => lib.toogleModal(true, setModalVisible)}>
                { imageURL == "" 
                    ? <Image source={placeholder} style={styles.poster} />
                    : <Image source={{ uri: imageURL }} style={styles.poster} />
                }
                <View style={styles.content}>
                    <Text style={styles.title}>{ movie.title }</Text>
                    <View style={styles.genres}>
                        <FlatList
                            data={movie.genre_ids.slice(0,2)}
                            keyExtractor={item => item.toString()}
                            renderItem={({ item }) => <Tag genreId={item} />}
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
            
            <MovieModal
                visible={modalVisible}
                toggleModal={() => lib.toogleModal(false, setModalVisible)}
                movie={movie}
            />
        </>
    );
}