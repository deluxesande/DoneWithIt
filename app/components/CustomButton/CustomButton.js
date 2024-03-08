import React from "react";
import { Text, TouchableOpacity } from "react-native";
import globalStyles from "../../Styles/GlobalStyles";

function CustomButton(props) {
    return (
        <TouchableOpacity
            onPress={() => console.log("Login")}
            style={[globalStyles.button, globalStyles[`btn_${props.btn_type}`]]}
        >
            <Text style={globalStyles.text_white}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
