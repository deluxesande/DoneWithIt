import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

function CustomInput(props) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                style={styles.input}
                secureTextEntry={props.secure}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        width: "100%",
        borderWidth: 1,
        borderColor: "#777",
        borderRadius: 5,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;
