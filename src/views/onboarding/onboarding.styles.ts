
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');
const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
    onboarding: {
        backgroundColor: 'white',
        height: '100%',
    },
    background: {
        backgroundColor: MAIN_COLOR,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    image: {
        width: width * 0.75,
        height: height * 0.4,
    },
    bottomInfo: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,
    },
    description: {
        marginBottom: 20,
        color: NEUTRAL_COLOR,
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    slider: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '63%',
    },
    advanceButtons: {
        width: '37%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default styles;