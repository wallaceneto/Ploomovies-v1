import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.7)",
    },
    container: {
        backgroundColor: theme.secondaryColor,
        marginHorizontal: 16,
        padding: 12,
        borderRadius: 8,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    content: {
        flexDirection: "row",
    },
    poster: {
        borderRadius: 8,
        marginRight: 8,
        width: 140,
        height: 220,
    },
    info: {
        flex: 1,
    },
    cast: {
        marginTop: 4,
        marginLeft: 8,
    },
    title: {
        color: theme.primaryTextColor,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        marginBottom: 8,
        color: theme.primaryTextColor,
    },
});

export default styles;