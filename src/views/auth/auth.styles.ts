import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { height } = Dimensions.get('window');

const createStyles = (bottomTabBarHeight: number): StyleSheet.NamedStyles<any> => StyleSheet.create({
    auth: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.MAIN_COLOR,
    },
    brand: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'transparent',
        height: height * 0.3,
    },
    bottomInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%', height: height * 0.7 - bottomTabBarHeight + 1,
        backgroundColor: COLORS.LIGHT_COLOR,
        padding: 25,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,

    },
    logo: {
        width: 100,
        height: 100,
        tintColor: COLORS.LIGHT_COLOR,
    },
    brandName: {
        color: COLORS.LIGHT_COLOR,
    },
    headings: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        width: '100%',
        height: 50,
        borderBottomColor: COLORS.NEUTRAL_COLOR,
        borderBottomWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
    pressedInput: {
        borderBottomColor: COLORS.MAIN_COLOR,
    },
    authButton: {
        backgroundColor: COLORS.MAIN_COLOR,
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    authButtonText: {
        color: COLORS.LIGHT_COLOR,
    },
});

export default createStyles;
