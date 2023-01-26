import React from 'react'
import { Text, StyleSheet } from 'react-native'

type CustomTextProps = {
    children: React.ReactNode,
    textType?: 'regular' | 'bold' | 'light' | 'italic',
    style?: object,
} & Text['props']

const CustomText: React.FC<CustomTextProps> = (props) => {
    const textStyles = new Map([
        ['regular', styles.regular],
        ['bold', styles.bold],
        ['light', styles.light],
        ['italic', styles.italic],
    ])

    const textStyle = textStyles.get(props?.textType || 'regular');
    const propsStyle = {...props.style, ...textStyle}

    return (
        <Text {...props} style={propsStyle}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: 'Poppins-Regular'
    },
    bold: {
        fontFamily: 'Poppins-Bold',
    },
    light: {
        fontFamily: 'Poppins-Light'
    },
    italic: {
        fontFamily: 'Poppins-Italic'
    },
})

export default CustomText