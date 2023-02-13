import React from 'react';
import { Text, StyleSheet } from 'react-native';

type CustomTextProps = {
	children: React.ReactNode;
	textType?: 'regular' | 'bold' | 'light' | 'italic';
	size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'big' | 'x-big' | 'xx-big';
	style?: object | object[];
} & Text['props'];

const CustomText: React.FC<CustomTextProps> = (props) => {
	const textStyles = new Map([
		['regular', styles.regular],
		['bold', styles.bold],
		['light', styles.light],
		['italic', styles.italic],
	]);

	const sizeStyles = new Map([
		['xx-small', styles.xxSmall],
		['x-small', styles.xSmall],
		['small', styles.small],
		['medium', styles.medium],
		['big', styles.big],
		['x-big', styles.xBig],
		['xx-big', styles.xxBig],
	]);

	const sizeStyle = sizeStyles.get(props?.size !== undefined ? props.size : 'medium');
	const textStyle = textStyles.get(props?.textType !== undefined ? props.textType : 'regular');
	let originalStyle = props.style !== undefined ? props.style : {};
	if (Array.isArray(originalStyle)) {
		originalStyle = originalStyle.flat();
	}
	originalStyle = { ...originalStyle, ...textStyle };

	return (
		<Text {...props} style={[originalStyle, sizeStyle]}>
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
	xxBig: {
		fontSize: 48,
	},
	xBig: {
		fontSize: 36,
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
	xSmall: {
		fontSize: 12,
	},
	xxSmall: {
		fontSize: 10,
	},
});

export default CustomText;
