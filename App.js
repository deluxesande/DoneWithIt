import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
    return <WelcomeScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: "5%",
    },
});
