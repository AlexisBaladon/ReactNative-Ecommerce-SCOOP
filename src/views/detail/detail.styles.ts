import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

export default StyleSheet.create({
	itemDetailScroll: {
		flex: 1,
		display: 'flex',
		position: 'relative',
		backgroundColor: 'white',
		marginBottom: 60,
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
	title: {},
	description: {
		color: NEUTRAL_COLOR,
	},
	bottomInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		paddingTop: '45%',
	},
	bottomItem: {},
	price: {
		width: '100%',
		color: MAIN_COLOR,
	},
	addButton: {
		backgroundColor: MAIN_COLOR,
		padding: 20,
		borderRadius: 10,
	},
	disabledButton: {
		backgroundColor: NEUTRAL_COLOR,
	},
	addButtonText: {
		color: 'white',
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
