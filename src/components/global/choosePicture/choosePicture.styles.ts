import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.LIGHT_COLOR,
    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: COLORS.LIGHT_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
    },
    buttonText: {
        color: COLORS.MAIN_COLOR,
    }

})

export default styles;