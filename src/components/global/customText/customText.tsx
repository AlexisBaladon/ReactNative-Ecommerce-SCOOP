import React from 'react';
import { Text, StyleSheet } from 'react-native';

type CustomTextProps = {
	children: React.ReactNode;
	textType?: 'regular' | 'bold' | 'light' | 'italic';
	size?: 'small' | 'medium' | 'big';
	style?: object;
} & Text['props'];

const CustomText: React.FC<CustomTextProps> = (props) => {
	const textStyles = new Map([
		['regular', styles.regular],
		['bold', styles.bold],
		['light', styles.light],
		['italic', styles.italic],
	]);

	const sizeStyles = new Map([
		['small', styles.small],
		['medium', styles.medium],
		['big', styles.big],
	]);

	const sizeStyle = sizeStyles.get(props?.size !== undefined? props.size : 'medium');
	const textStyle = textStyles.get(props?.textType !== undefined? props.textType : 'regular');
	const propsStyle = { ...props.style, ...textStyle };

	return (
		<Text {...props} style={[propsStyle, sizeStyle]}>
			{props.children}
		</Text>
	);
};

const styles = StyleSheet.create({
	regular: {
		fontFamily: 'Poppins-Regular',
	},
	bold: {
		fontFamily: 'Poppins-Bold',
	},
	light: {
		fontFamily: 'Poppins-Light',
	},
	italic: {
		fontFamily: 'Poppins-Italic',
	},
	big: {
		fontSize: 24,
	},
	medium: {
		fontSize: 18,
	},
	small: {
		fontSize: 14,
	},
});

export default CustomText;
