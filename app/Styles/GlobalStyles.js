import { StyleSheet } from "react-native";
import { Platform, StatusBar } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        padding: 20,
        width: "100%",
    },
    button: {
        backgroundColor: "#007AE1",
        width: "100%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5,
    },
    btn_primary: {
        backgroundColor: "#007AE1",
    },
    btn_secondary: {
        backgroundColor: "#FA5A00",
    },
    btn_social: {
        backgroundColor: "#007AE1",
    },
    btn_social_white: {
        backgroundColor: "#CFCFCF",
    },
    text_white: {
        fontWeight: "bold",
        color: "white",
    },
    text_social: {
        fontWeight: "bold",
        color: "#007AE1",
    },
    flex_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
});

export default globalStyles;
