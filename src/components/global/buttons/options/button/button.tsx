import React from 'react';
import { TouchableOpacity, type GestureResponderEvent } from 'react-native';
import CustomText from '../../../customText/customText';
import styles from './button.styles';

interface IProps {
	title: string;
	isSelected: boolean;
	onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<IProps> = ({ title, isSelected, onPress }) => {
	const customStyles = styles(isSelected);

	return (
		<TouchableOpacity style={customStyles.button} onPress={onPress}>
			<CustomText size="small" style={customStyles.text}>
				{title}
			</CustomText>
		</TouchableOpacity>
	);
};

export default Button;
