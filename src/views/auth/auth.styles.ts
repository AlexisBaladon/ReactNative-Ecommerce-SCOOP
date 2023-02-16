import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../constants';

const { height, width } = Dimensions.get('window');

const createStyles = (bottomTabBarHeight: number, hasAccount: boolean, visibleHeader: boolean): StyleSheet.NamedStyles<any> => {
    const heightBrand = hasAccount ? height * 0.3 : height * 0.25;
    const statusBarHeight = StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0;

    return StyleSheet.create({
        auth: {
            flex: 1,
            backgroundColor: COLORS.MAIN_COLOR,
            height,
        },
        brand: {
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: 'transparent',
            height: heightBrand,
            marginLeft: - width * 0.035,
            paddingTop: width * 0.07,
        },
        bottomInfo: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%', height: height - heightBrand + (statusBarHeight + 1) - bottomTabBarHeight, // 1px for border
            backgroundColor: COLORS.LIGHT_COLOR,
            padding: 25,
            borderTopEndRadius: visibleHeader ? 25 : 0,
            borderTopStartRadius: visibleHeader ? 25 : 0,
            borderColor: COLORS.LIGHT_COLOR,

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
        hasAccountAction: {
            color: COLORS.MAIN_COLOR,
        },
    })
};

export default createStyles;
