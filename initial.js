import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    Button,
    Alert,
    Platform,
} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Deluxe App</Text>
            <Text>And it works</Text>
            <TouchableWithoutFeedback
                onPress={() => console.log("Image Clicked")}
            >
                <Image
                    blurRadius={2}
                    fadeDuration={1000}
                    source={{
                        width: 200,
                        height: 300,
                        uri: "https://deluxesande.me/projects/EBS/Cover.jpg",
                    }}
                />
            </TouchableWithoutFeedback>

            <Button
                title="Click Me"
                onPress={() =>
                    Alert.alert("My Title", "Message", [
                        { text: "Yes", onPress: () => console.log("Yes") },
                        { text: "No", onPress: () => console.log("No") },
                    ])
                }
            />
            {/* This is what affects the notch */}
            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: "5%",
    },
});
