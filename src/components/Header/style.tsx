import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.primaryColor,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    image: {
        width: 48,
        height: 48,
    },
});

export default styles;