import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../constants/index';

const { BACKGROUND_COLOR } = COLORS;

const { width, height } = Dimensions.get('window');
const headerHeight = 100;
const searchHeight = 70;
const optionsHeight = 40;
const itemHeight = height*0.2;

const styles = StyleSheet.create({
	app: {
		flex: 1,
		width: width,
		backgroundColor: BACKGROUND_COLOR,
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		height: headerHeight,
		paddingTop: StatusBar.currentHeight,
	},
	title: {
		fontSize: 28,
		textAlign: 'center',
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
