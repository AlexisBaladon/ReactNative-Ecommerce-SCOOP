import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
    },
    closeButtonText: {
        fontSize: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    inputTitleContainer: {
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 5,
    },
    doubleInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    doubleInputColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    priceInput: {
        width: '85%',
    },
    inputBox: {
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        padding: 2,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,
    },
    button: {
        borderRadius: 15,
        padding: 12,
        marginLeft: 15,
    
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2
    },
    acceptButton: {
        backgroundColor: MAIN_COLOR,
    },
    cancelButton: {
        backgroundColor: NEUTRAL_COLOR,
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
    },
    textStyle: {
        color: MAIN_COLOR,
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default styles;