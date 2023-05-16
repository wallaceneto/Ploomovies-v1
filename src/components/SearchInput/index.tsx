import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from "./style";
import lib from "./lib";
import theme from "../../global/styles/theme";

interface MyProps {
    textValue: string,
    setTextValue: Function,
}

export default function SearchInput(props: MyProps) {

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
                    ? <Ionicons name="search" size={24} color={theme.searchIconColor} />
                    : 
                    <TouchableOpacity onPress={() => lib.cleanTextValue(props.setTextValue)}>
                        <Ionicons name="close" size={24} color={theme.searchIconColor} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}