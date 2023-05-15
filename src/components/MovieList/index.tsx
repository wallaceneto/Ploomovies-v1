import React from "react";
import { FlatList, Text, View } from "react-native";

interface MyProps {
    movies: Movie[]
}

export default function MovieList(props: MyProps) {
    return(
        <View>
            <FlatList
                data={props.movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Text>{item.title}</Text>
                }
            />
        </View>
    );
}