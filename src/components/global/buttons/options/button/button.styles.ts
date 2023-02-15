import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

const { MAIN_COLOR, LIGHT_COLOR, NEUTRAL_COLOR } = COLORS;

const createStyles = (
	isSelected: boolean,
	backgroundColor?: string,
	color?: string,
	pressedBackgroundColor?: string,
	pressedColor?: string,
): StyleSheet.NamedStyles<any> =>
	StyleSheet.create({
		button: {
			backgroundColor: isSelected
				? pressedBackgroundColor ?? MAIN_COLOR
				: backgroundColor ?? 'white',
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			elevation: 3,

			borderRadius: 50,
			paddingVertical: 2.5,
			paddingHorizontal: 12,
		},
		text: {
			color: isSelected ? pressedColor ?? LIGHT_COLOR : color ?? NEUTRAL_COLOR,
		},
	});

export default createStyles;
