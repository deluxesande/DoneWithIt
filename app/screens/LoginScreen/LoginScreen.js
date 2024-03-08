import React from "react";
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomForgotPassword from "../../components/CustomForgotPassword/CustomForgotPassword";
import FacebookButton from "../../components/SocialsButtons/FacebookButton/FacebookButton";
import GoogleButton from "../../components/SocialsButtons/GoogleButton/GoogleButton";
import globalStyles from "../../Styles/GlobalStyles";

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <CustomInput placeholder="Username" />
            <CustomInput placeholder="Password" secure />

            <CustomForgotPassword />

            <CustomButton text="Login" btn_type="primary" />

            <Text style={{ marginVertical: 15 }}>
                Or Login With Your Socials
            </Text>

            <FacebookButton />
            <GoogleButton />

            <TouchableOpacity onPress={() => console.log("Sign Up pressed")}>
                <Text style={{ marginVertical: 15 }}>
                    Don't have an account?
                    <Text style={globalStyles.text_social}>Sign Up</Text>
                </Text>
            </TouchableOpacity>

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
