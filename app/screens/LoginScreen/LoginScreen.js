import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <CustomInput placeholder="Username" />
            <CustomInput placeholder="Password" secure />
            <CustomButton text="Login" />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        padding: 20,
    },
});

export default LoginScreen;
