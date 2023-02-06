import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR, LIGHT_COLOR, DARK_COLOR } = COLORS;

const createStyles = (width: number): any =>
	StyleSheet.create({
		container: {
			borderRadius: 100,
			backgroundColor: LIGHT_COLOR,
			width,
			height: width,
			justifyContent: 'center',
			alignItems: 'center',
		},
		icon: {
			width: width / 4,
			height: width / 4,
			tintColor: DARK_COLOR,
		},
		activeButton: {
			backgroundColor: MAIN_COLOR,
		},
		activeIcon: {
			tintColor: 'white',
		},
	});

export default createStyles;
