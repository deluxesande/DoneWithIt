import React from "react";
import { Text, TouchableOpacity } from "react-native";
import GoogleLogo from "../../../assets/google-color-svgrepo-com.svg";
import globalStyles from "../../../Styles/GlobalStyles";

function GoogleButton(props) {
    return (
        <TouchableOpacity
            style={[
                globalStyles.button,
                globalStyles.btn_social_white,
                globalStyles.flex_container,
            ]}
            onPress={props.onPress}
        >
            <GoogleLogo width={30} height={30} />
            <Text style={globalStyles.text_social}>Continue with Google</Text>
        </TouchableOpacity>
    );
}

export default GoogleButton;
