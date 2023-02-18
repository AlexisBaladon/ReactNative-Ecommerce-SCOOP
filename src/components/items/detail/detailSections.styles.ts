import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const { LIGHT_COLOR, NEUTRAL_COLOR } = COLORS;
const styles = StyleSheet.create({
	recommendedContainer: {
		paddingVertical: 10,
	},
	recommended: {
		borderRadius: 55,
		overflow: 'hidden',
	},
	recommendedTitle: {
		marginTop: 20,
	},
	recommendedImage: {
		width: 100,
		borderRadius: 15,
		height: 100,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: LIGHT_COLOR,
		
	},
	tagsContainer: {
		marginTop: 10,
	},
	buttonColors: {
		backgroundColor: LIGHT_COLOR,
		color: NEUTRAL_COLOR,
	},
});

export default styles;
