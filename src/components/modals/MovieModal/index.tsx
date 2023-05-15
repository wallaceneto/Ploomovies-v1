import React from "react";
import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import placeholder from "../../../../assets/poster-placeholder.png";
import styles from "./styles";
import getPoster from "../../../global/lib/getPoster";

interface MyProps {
    visible: boolean,
    toggleModal: Function,
    movie: Movie,
}

export default function MovieModal(props: MyProps) {
    const imageURL = getPoster(props.movie.poster_path);

    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {}}>
                            <Ionicons name="share-social" size={30} color={"#fff"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.toggleModal(false)}>
                            <Ionicons name="close" size={30} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        { imageURL == "" 
                            ? <Image source={placeholder} style={styles.poster} />
                            : <Image source={{ uri: imageURL }} style={styles.poster} />
                        }
                        <View style={styles.info}>
                            <Text style={styles.title}>{props.movie.title}</Text>
                            {
                                props.movie.overview === ""
                                ? <Text style={styles.subtitle}>Sem sinopse disponível</Text>
                                : <Text style={styles.subtitle}>{props.movie.overview}</Text>
                            }
                            <Text style={styles.title}>Lançamento:</Text>
                            <Text style={styles.subtitle}>{props.movie.release_date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
