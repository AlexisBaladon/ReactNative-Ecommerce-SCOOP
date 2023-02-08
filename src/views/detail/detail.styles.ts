import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;
const { width } = Dimensions.get('window');

export default StyleSheet.create({
	itemDetailScroll: {
		flex: 1,
		display: 'flex',
		position: 'relative',
		backgroundColor: 'white',
	},
	itemDetail: {},
	itemImage: {
		width: '100%',
		height: 300,
	},
	itemInfo: {
		flex: 1,
		position: 'relative',
		padding: 20,
	},
	description: {
		color: NEUTRAL_COLOR,
	},
	bottomInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		paddingTop: '55%',
	},
	price: {
		width: '100%',
		color: MAIN_COLOR,
	},
	addButton: {
		width: width*0.6,
		backgroundColor: MAIN_COLOR,
		padding: 20,
		borderRadius: 10,
	},
	disabledButton: {
		backgroundColor: NEUTRAL_COLOR,
	},
	addButtonText: {
		color: 'white',
		textAlign: 'center',
	},
	topInfoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	topInfo: {
		width: '80%',
		display: 'flex',
		flexDirection: 'column',
	},
	countContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: 40,
	},
});
