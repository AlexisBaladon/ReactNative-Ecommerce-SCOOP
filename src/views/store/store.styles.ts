import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../constants/index';

const { BACKGROUND_COLOR } = COLORS;

const { height } = Dimensions.get('window');
const headerHeight = 100;
const searchHeight = 70;
const optionsHeight = 40;
const itemHeight = 300;

const styles = StyleSheet.create({
	items: {
		height: height - headerHeight - searchHeight - optionsHeight,
	},
});

export { styles, itemHeight };
