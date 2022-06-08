import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import { RootstackParamList } from "../../../ts/types";

const Footer: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootstackParamList, "HomeScreen">
        >();

    return (
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignInScreen")}
                >
                    <CustomButton>Se connecter</CustomButton>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpStack")}
                >
                    <CustomButton color="white">S'inscrire</CustomButton>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerBtn: {
        marginTop: 50,
        width: 200,
        alignSelf: "center",
    },
});