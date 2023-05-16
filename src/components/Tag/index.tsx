import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

interface MyProps {
    genreId: number,
}

export default function Tag(props: MyProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.genreId}</Text>
        </View>
    );
}