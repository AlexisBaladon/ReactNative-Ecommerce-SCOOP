import React from 'react';
import { View, Image, type ImageSourcePropType, TouchableOpacity } from 'react-native';
import styles from './choosePicture.styles';
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
				<CustomText style={styles.buttonText}>{buttonText}</CustomText>
			</TouchableOpacity>
		</View>
	);
};

export default ChoosePicture;
