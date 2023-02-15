import React from 'react';
import { TouchableOpacity, type GestureResponderEvent } from 'react-native';
import CustomText from '../../../customText/customText';
import createStyles from './button.styles';

interface IProps {
	title: string;
	isSelected: boolean;
	onPress: (event: GestureResponderEvent) => void;
	backgroundColor?: string;
	color?: string;
	pressedBackgroundColor?: string;
	pressedColor?: string;
}

const Button: React.FC<IProps> = ({
	title,
	isSelected,
	onPress,
	backgroundColor,
	color,
	pressedBackgroundColor,
	pressedColor,
}) => {
	const customStyles = createStyles(
		isSelected,
		backgroundColor,
		color,
		pressedBackgroundColor,
		pressedColor,
	);

	return (
		<TouchableOpacity style={customStyles.button} onPress={onPress}>
			<CustomText size="small" style={customStyles.text}>
				{title}
			</CustomText>
		</TouchableOpacity>
	);
};

export default Button;
