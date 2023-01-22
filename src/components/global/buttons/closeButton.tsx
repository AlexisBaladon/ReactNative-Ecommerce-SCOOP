import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LIGHT_COLOR, MAIN_COLOR } from '../../../constants/styles';

interface IProps {
    onPress: () => void;
    height?: number;
    width?: number;
}

const CloseButton: React.FC<IProps> = ({onPress, height=25, width=25}) => {
    const styles = getStyles(height, width);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={require('./cross.png')} style={styles.crossImage} />
        </TouchableOpacity>
    )
}

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

export default CloseButton;