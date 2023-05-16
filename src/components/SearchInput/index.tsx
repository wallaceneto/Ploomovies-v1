import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from "./style";

interface MyProps {
    textValue: string,
    setTextValue: Function,
}

export default function SearchInput(props: MyProps) {

    const cleanTextValue = () => {
        props.setTextValue("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <TextInput 
                    value={props.textValue}
                    onChangeText={value => props.setTextValue(value)}
                    onSubmitEditing={() => props.setTextValue(props.textValue)}
                    placeholder="Buscar filme"
                    style={styles.textInput}
                />
                {props.textValue === "" 
                    ? <Ionicons name="search" size={24} color="#5A5A5A" />
                    : 
                    <TouchableOpacity onPress={() => cleanTextValue()}>
                        <Ionicons name="close" size={24} color="#5A5A5A" />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}