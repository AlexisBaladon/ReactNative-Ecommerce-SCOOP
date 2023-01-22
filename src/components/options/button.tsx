import React from 'react'
import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { LIGHT_COLOR, NEUTRAL_COLOR, MAIN_COLOR } from '../../constants/styles';

interface IProps {
    title: string;
    isSelected: boolean,
    onPress(event: GestureResponderEvent): void;
}

const Button: React.FC<IProps> = ({title, isSelected, onPress}) => {
    const customStyles = styles(isSelected);

    return (<TouchableOpacity style={customStyles.button} onPress={onPress}>
            <Text style={customStyles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = (isSelected: boolean) => StyleSheet.create({
    button: {
        backgroundColor: isSelected? MAIN_COLOR:'white',

        //shadow of elevation 3
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

        borderRadius: 50,
        paddingVertical: 2.5, paddingHorizontal: 12,
    },
    text: {
        color: isSelected? LIGHT_COLOR:NEUTRAL_COLOR,
    }
})