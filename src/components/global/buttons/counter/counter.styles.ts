import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR, LIGHT_COLOR } = COLORS;

const styles = StyleSheet.create({
    counter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: LIGHT_COLOR,
        borderRadius: 25,
    },
    addDecButton: {
        width: '100%',
    },
    text: {
        color: MAIN_COLOR,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    }
});

export default styles;