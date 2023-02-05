import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const { NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,
		paddingBottom: 5,
		backgroundColor: 'white',
		borderRadius: 15,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	itemImage: {
		width: '100%',
		height: '49%',
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		elevation: 4,
	},
	textContainer: {
		width: '100%',
		height: '49%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
	},
	itemTitle: {
		fontSize: 20,
	},
	itemDescription: {
		color: NEUTRAL_COLOR,
	},
});

export default styles;
