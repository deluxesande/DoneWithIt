import React from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import globalStyles from "../../Styles/GlobalStyles";
import EveryLogo from "../../assets/evry-svgrepo-com.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomForgotPassword from "../../components/CustomForgotPassword/CustomForgotPassword";
import CustomInput from "../../components/CustomInput/CustomInput";
import FacebookButton from "../../components/SocialsButtons/FacebookButton/FacebookButton";
import GoogleButton from "../../components/SocialsButtons/GoogleButton/GoogleButton";

function LoginScreen(props) {
    return (
        <SafeAreaView style={[globalStyles.container, styles.flex_ends]}>
            <EveryLogo width={100} height={100} style={styles.logo} />

            <View style={styles.input_container}>
                <CustomInput placeholder="Username" />
                <CustomInput placeholder="Password" secure />

                <CustomForgotPassword />

                <CustomButton text="Login" btn_type="primary" />

                <Text style={{ marginVertical: 15 }}>
                    Or Login With Your Socials
                </Text>

                <FacebookButton />
                <GoogleButton />

                <TouchableOpacity
                    onPress={() => console.log("Sign Up pressed")}
                >
                    <Text style={{ marginVertical: 15 }}>
                        Don't have an account?
                        <Text style={globalStyles.text_social}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input_container: {
        width: "100%",
        padding: 15,
        backgroundColor: "white",
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center",
    },
    flex_ends: {
        // justifyContent: "space-between",
    },
    logo: {
        marginTop: 10,
        marginBottom: 40,
    },
});

export default LoginScreen;
