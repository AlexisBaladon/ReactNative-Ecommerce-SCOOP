import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, MAIN_COLOR, NEUTRAL_COLOR } from '../../../../../constants/styles';

const styles = (isSelected: boolean) => StyleSheet.create({
    button: {
        backgroundColor: isSelected? MAIN_COLOR:'white',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

        borderRadius: 50,
        paddingVertical: 2.5, paddingHorizontal: 12,
    },
    text: {
        color: isSelected? LIGHT_COLOR : NEUTRAL_COLOR,
    }
})

export default styles;