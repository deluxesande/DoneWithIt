import React from "react";
import { StyleSheet, Text, View } from "react-native";

function CustomButton(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3B71F3",
        width: "100%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5,
    },
    text: {
        fontWeight: "bold",
        color: "white",
    },
});

export default CustomButton;
