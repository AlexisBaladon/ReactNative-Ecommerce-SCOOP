import { LIGHT_COLOR, MAIN_COLOR } from '../../../../constants/styles';
import { StyleSheet } from 'react-native';

const getStyles = (height: number, width: number) => {
    return StyleSheet.create({
        button: {
            width: width, height: height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: LIGHT_COLOR,
            borderRadius: 10,
        },
        crossImage: {
            width: width/2, height: height/2,
            tintColor: MAIN_COLOR,
        }
    });
}

export default getStyles;