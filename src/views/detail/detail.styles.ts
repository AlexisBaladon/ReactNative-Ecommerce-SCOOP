import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	itemDetailScroll: {
		flex: 1,
		display: 'flex',
		position: 'relative',
		backgroundColor: 'white',
		marginBottom: height * 0.1,
		marginTop: -height * 0.01,
	},
	itemDetail: { },
	itemImage: {
		width: '100%',
		height: 300, 
		resizeMode: 'contain',
	},
	category: {
		color: MAIN_COLOR,
	},
	itemInfo: {
		flex: 1,
		position: 'relative',
		padding: 20,
	},
	description: {
		color: NEUTRAL_COLOR,
	},
	line: {
		marginTop: 10,
	},
	sections: {
		marginTop: 20,
	},
	bottomInfo: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		position: 'absolute',
		bottom: 0,
		left: 0,
		padding: width * 0.05,
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		borderTopEndRadius: 20,
		borderTopStartRadius: 20,
	},
	priceContainer: {},
	price: {
		width: width * 0.3,
		textAlign: 'left',
		color: MAIN_COLOR,
	},
	addButton: {
		width: width * 0.6,
		backgroundColor: MAIN_COLOR,
		padding: 20,
		borderRadius: 10,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 4,
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
