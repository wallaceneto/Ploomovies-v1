import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 4,
    },
    textContainer: {
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        paddingVertical: 8,
    },
});

export default styles;