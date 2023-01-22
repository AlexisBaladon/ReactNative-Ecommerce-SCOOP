import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, MAIN_COLOR } from '../../../../constants/styles';

const getStyles = (height: number | string, width: number | string) => {
    return StyleSheet.create({
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
}

export default getStyles;