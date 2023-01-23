import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR } = COLORS;

const selectedStyle = StyleSheet.create({
	style: {
		borderColor: MAIN_COLOR,
		borderWidth: 3,
		opacity: 1,
		overflow: 'hidden',
	},
}).style;

const styles = StyleSheet.create({
	imageButton: {
		width: 150,
		height: 150,
		aspectRatio: 1,
		marginHorizontal: 15,
		marginVertical: 15,
		borderRadius: 15,
		overflow: 'hidden',
	},
	image: {
		width: 150,
		height: 150,
		resizeMode: 'cover',
	},
});

export { styles, selectedStyle };
