import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function CustomForgotPassword(props) {
    return (
        <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={() => console.log("Forgot Password pressed")}
            >
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    forgotPasswordContainer: {
        width: "100%",
        alignItems: "flex-end",
    },
    forgotPasswordContainer: {
        width: "100%",
        alignItems: "flex-end",
    },
    forgotPassword: {
        color: "blue",
        marginVertical: 15,
    },
});

export default CustomForgotPassword;
