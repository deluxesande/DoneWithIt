import React from "react";
import { Text, TouchableOpacity } from "react-native";
import FacebookLogo from "../../../assets/facebook-svgrepo-com.svg";
import globalStyles from "../../../Styles/GlobalStyles";

function FacebookButton(props) {
    return (
        <TouchableOpacity
            style={[
                globalStyles.button,
                globalStyles.btn_social,
                globalStyles.flex_container,
            ]}
            onPress={props.onPress}
        >
            <FacebookLogo width={30} height={30} />
            <Text style={globalStyles.text_white}>Continue with Facebook</Text>
        </TouchableOpacity>
    );
}

export default FacebookButton;
