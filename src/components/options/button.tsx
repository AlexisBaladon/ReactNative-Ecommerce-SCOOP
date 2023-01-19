import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { LIGHT_COLOR, NEUTRAL_COLOR, MAIN_COLOR } from '../../constants/styles';

interface IProps {
    button: string;
    isSelected: boolean,
}

const Button: React.FC<IProps> = ({button, isSelected}) => {
    const customStyles = styles(isSelected);

    return (<TouchableOpacity style={customStyles.button}>
            <Text style={customStyles.text}>{button}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = (isSelected: boolean) => StyleSheet.create({
    button: {
        backgroundColor: isSelected? MAIN_COLOR:LIGHT_COLOR,
        borderColor: NEUTRAL_COLOR,
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 2.5, paddingHorizontal: 12,
    },
    text: {
        color: isSelected? LIGHT_COLOR:NEUTRAL_COLOR,
    }
})