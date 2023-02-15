import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemHeight = 260;

const styles = StyleSheet.create({
	item: {
		minHeight: 250,
		maxWidth: width * 0.45,
		width: width * 0.42,
		height: itemHeight,
		margin: 10,
	},
	search: {
		marginVertical: 15,
	},
	options: {
		paddingHorizontal: 25,
	},
});

export { styles, itemHeight };
