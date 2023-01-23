import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import getStyles from './closeButton.styles';

interface IProps {
	onPress: () => void;
	height?: number;
	width?: number;
}

const CloseButton: React.FC<IProps> = ({ onPress, height = 25, width = 25 }) => {
	const styles = getStyles(height, width);
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Image source={require('./cross.png')} style={styles.crossImage} />
		</TouchableOpacity>
	);
};

export default CloseButton;
