import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            resizeMode="contain"
            style={styles.background}
            source={{
                uri: "https://imgs.search.brave.com/AH_AOeoJsNW5QEEKJanVqIZpXzMX79hg2P-D1hVp0S8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA5LzQx/L2IwLzA5NDFiMGUw/YmVlYTZjYmQyMWUx/YTc4MGI0NThhOTFm/LmpwZw",
            }}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/icon.png")}
                />
                <Text>Let's work together</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        gap: 20,
    },
});

export default WelcomeScreen;
