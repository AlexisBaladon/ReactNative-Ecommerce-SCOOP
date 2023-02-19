import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const createStyles = (
	size: number,
	borderColor: string = COLORS.NEUTRAL_COLOR,
	checkedColor: string = COLORS.NEUTRAL_COLOR,
): StyleSheet.NamedStyles<any> => {
	return StyleSheet.create({
		checkbox: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		checkboxChild: {
			marginTop: 5,
			flexDirection: 'row',
			alignItems: 'center',
		},
		checkContainer: {
			width: size,
			height: size,
			borderRadius: 2,
			borderWidth: 1,
			borderColor,
			marginEnd: 5,
		},
		check: {
			width: size,
			height: size,
			marginEnd: 5,
			position: 'absolute',
		},
		title: {
			color: COLORS.NEUTRAL_COLOR,
		},
	});
};

export default createStyles;
