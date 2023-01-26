import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;
const buttonWidth = 26;

const styles = StyleSheet.create({
	item: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: '4%',
		paddingHorizontal: '3%',
		backgroundColor: 'white',
		borderRadius: 15,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	imageContainer: {
		width: '40%',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 15,
		overflow: 'hidden',
	},
	itemImage: {
		width: '100%',
		height: '100%',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		elevation: 4,
		overflow: 'visible',
	},
	textContainer: {
		width: '40%',

		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
	},
	itemTitle: {
		fontSize: 22,
	},
	itemDescription: {
		color: NEUTRAL_COLOR,
	},
	itemPrice: {
		position: 'absolute',
		bottom: 0,
		color: MAIN_COLOR,

		fontSize: 20,
	},
	buttonContainer: {
		width: '10%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	counterButtons: {
		width: buttonWidth,
	},
});

export { styles, buttonWidth };
