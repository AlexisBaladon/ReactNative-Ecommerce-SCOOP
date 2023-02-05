import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const createStyles = (width: number): StyleSheet.NamedStyles<any> =>
	StyleSheet.create({
		absolute: {
			position: 'absolute',
			top: '4%',
			right: '4%',
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: 1,
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 1,
		},
		circle: {
			width,
			height: width,
			borderRadius: 25,
			tintColor: 'white',
			justifyContent: 'center',
			alignItems: 'center',
		},
		heart: {
			width: width * 0.6,
			height: width * 0.55,
			tintColor: NEUTRAL_COLOR,
			position: 'absolute',
		},
		likedHeart: {
			tintColor: MAIN_COLOR,
		},
	});

export default createStyles;
