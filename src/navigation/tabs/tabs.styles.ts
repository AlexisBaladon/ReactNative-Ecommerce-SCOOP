import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const iconWidth = 45;
const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

export default StyleSheet.create({
	tabBar: {
		height: 65,
		paddingTop: 10,
		borderTopEndRadius: 20,
		borderTopStartRadius: 20,
	},
	icon: {
		tintColor: NEUTRAL_COLOR,
		width: iconWidth,
		height: iconWidth,
	},
	chosenIcon: {
		tintColor: MAIN_COLOR,
		width: iconWidth * 1.1,
		height: iconWidth * 1.1,
	},
});
