import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const { MAIN_COLOR, LIGHT_COLOR } = COLORS;

const createStyles = (sliderWidth: number): any =>
	StyleSheet.create({
		slider: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		slice: {
			borderRadius: sliderWidth * 0.8,
			width: sliderWidth * 0.3,
			height: sliderWidth * 0.08,
			backgroundColor: LIGHT_COLOR,
			margin: sliderWidth * 0.03,
		},
		selectedSlice: {
			backgroundColor: MAIN_COLOR,
		},
	});

export default createStyles;
