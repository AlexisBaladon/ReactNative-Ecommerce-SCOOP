import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/index';

const { BACKGROUND_COLOR } = COLORS;

const { width, height } = Dimensions.get('window');
const headerHeight = height / 9;
const searchHeight = height / 12;
const optionsHeight = height / 22;
const itemHeight = height / 5.25;

const styles = StyleSheet.create({
	app: {
		flex: 1,
		width: width,
		height: height,
		backgroundColor: BACKGROUND_COLOR,
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		height: headerHeight,
		marginTop: 30,
	},
	title: {
		fontSize: 28,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	search: {
		height: searchHeight,
	},
	options: {
		height: optionsHeight,
	},
	items: {
		height: height - headerHeight - searchHeight - optionsHeight,
	},
});

export { styles, itemHeight };
