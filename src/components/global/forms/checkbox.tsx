import React, { useState } from 'react';
import { View, Image, Pressable, type ImageStyle } from 'react-native';
import CustomText from '../customText/customText';
import createStyles from './checkbox.styles';

interface IProps {
	title: string;
	size: number;
	color?: string;
	checkedColor?: string;
	onPress?: () => void;
	initiallyChecked: boolean;
}

const Checkbox: React.FC<IProps> = ({
	title,
	size,
	color,
	checkedColor,
	initiallyChecked,
	onPress,
}) => {
	const [checked, setChecked] = useState(true);
	const borderColor = initiallyChecked ? checkedColor : color;
	const styles = createStyles(size, borderColor, checkedColor);

	const handleOnPress = (): void => {
		setChecked(!checked);
		onPress?.();
	};

	return (
		<View style={styles.checkbox}>
			<View style={styles.checkboxChild}>
				<Pressable onPress={handleOnPress}>
					{checked && (
						<Image source={require('./check.png')} style={styles.check as ImageStyle} />
					)}
					<View style={styles.checkContainer} />
				</Pressable>
				<CustomText size="small" style={styles.title}>
					{title}
				</CustomText>
			</View>
		</View>
	);
};

export default Checkbox;
