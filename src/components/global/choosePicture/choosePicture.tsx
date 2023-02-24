import React from 'react'
import { View, Image, StyleSheet, type ImageSourcePropType, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants';
import CustomText from '../customText/customText';

interface IProps {
    image: ImageSourcePropType | undefined;
    handleChoosePicture: () => void;
    title: string;
    buttonText: string;
}

const ChoosePicture: React.FC<IProps> = ({ image, handleChoosePicture, title, buttonText }) => {

  return (
    <View style={styles.container}>
        <Image source={image} style={styles.picture} />
        <CustomText style={styles.text}>{title}</CustomText>
        <TouchableOpacity onPress={handleChoosePicture} style={styles.button}>
            <CustomText style={styles.buttonText}>Cambiar foto</CustomText>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.LIGHT_COLOR,
    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: COLORS.LIGHT_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
    },
    buttonText: {
        color: COLORS.MAIN_COLOR,
    }

})

export default ChoosePicture