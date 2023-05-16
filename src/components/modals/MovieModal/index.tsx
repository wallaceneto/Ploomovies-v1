import React, { useState, useEffect } from "react";
import { Modal, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import placeholder from "../../../../assets/poster-placeholder.png";
import getPoster from "../../../global/lib/getPoster";
import { getActors } from "../../../services/getData";
import styles from "./styles";
import lib from "./lib";

interface MyProps {
    visible: boolean,
    toggleModal: Function,
    movie: Movie,
}

export default function MovieModal(props: MyProps) {
    const imageURL = getPoster(props.movie.poster_path);
    const [actors, setActors] = useState<Actor[]>([]);
    
    useEffect(() => {
        fetchActors();
    },[])

    const fetchActors = async () => {
        const cast = await getActors(props.movie.id);
        setActors(cast.slice(0, 6));
    };
    
    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => 
                            lib.onShare(props.movie.title, props.movie.overview)
                        }>
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
                            <Text style={styles.subtitle}>
                                {lib.fixDate(props.movie.release_date)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cast}>
                        <Text style={styles.title}>Atores:</Text>
                        <FlatList
                            data={actors}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => 
                                <Text style={styles.subtitle}>{item.name}, </Text>
                            }
                            scrollEnabled={false}
                            numColumns={3}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
