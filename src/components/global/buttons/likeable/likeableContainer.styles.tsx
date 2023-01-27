import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR } = COLORS;

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: '4%',
        right: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    circle: {
        width: 30,height: 30,
        borderRadius: 25,
        tintColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heart: {
        width: 17.5,
        height: 15,
        tintColor: MAIN_COLOR,
        position: 'absolute',
    },
});

export default styles;