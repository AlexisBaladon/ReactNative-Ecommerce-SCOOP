import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_COLOR } from '../../../constants/styles';

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
            backgroundColor: 'whitesmoke',
            borderRadius: 10,
        },
        text: {
            color: MAIN_COLOR,
            fontSize: width*0.6,
            fontWeight: 'bold',
        },
        crossImage: {
            width: width*0.5,
            height: height*0.5,
            tintColor: MAIN_COLOR,
        }
    });
}

export default CloseButton;