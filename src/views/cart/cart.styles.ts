import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../constants/index';

const { LIGHT_COLOR } = COLORS;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	item: {
		minHeight: 150,
		height: height * 0.2,
		width: width,
		paddingHorizontal: '6%',
		marginVertical: 15,
		borderColor: LIGHT_COLOR,
		borderWidth: 1,
		borderRadius: 15,
	},
	search: {
		marginVertical: 15,
	},
});

export default styles;
