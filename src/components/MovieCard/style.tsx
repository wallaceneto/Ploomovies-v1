import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.cardColor,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        flexDirection: "row",
    },
    poster: {
        width: 100,
        height: 140,
        borderRadius: 8,
        marginRight: 16,
    },
    content: {
        flex: 2,
    },
    genres: {
        flexDirection: "row",
        marginTop: 12,
    },
    infos: {
        flexDirection: "row",
        marginTop: 12,
    },
    voteDisplay: {
        padding: 8,
        borderWidth: 2,
        borderRadius: 8,
    },
    voteText: {
        fontSize: 12,
        fontWeight: "bold",
    },
    favButton: {
        justifyContent: "flex-end",
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
    },
});

export default styles;