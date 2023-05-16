import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";
import triste from "../../../assets/Ploo-triste.jpeg";

export default function EmptyResult() {
    const text = "Nenhum filme encontrado";

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={triste} />
            <Text style={ styles.text}>{ text }</Text>
        </View>
    );
}