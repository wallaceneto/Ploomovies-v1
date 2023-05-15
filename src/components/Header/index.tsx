import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";
import logo from "../../../assets/logo.png";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ploomovies</Text>
            <Image source={logo} style={styles.image} />
        </View>
    );
}