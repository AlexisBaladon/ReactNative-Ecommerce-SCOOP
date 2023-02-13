import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { MAIN_COLOR, LIGHT_COLOR, NEUTRAL_COLOR } = COLORS;
const { width } = Dimensions.get('window');

export default StyleSheet.create({
	screen: {
		flex: 1,
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: 'white',
	},
	text: {
		color: LIGHT_COLOR,
	},
	costData: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		padding: 15,
		margin: 20,
		borderRadius: 15,
		backgroundColor: MAIN_COLOR,
	},
	brand: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '50%',
	},
	storeIcon: {
		width: 50,
		height: 50,
		tintColor: LIGHT_COLOR,
	},
	priceText: {
	},
	itemCheckoutScroll: {
		
		backgroundColor: 'white',
	},
	checkoutButton: {
		width: width * 0.7, height: 50,
		borderRadius: 15,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: MAIN_COLOR,
	},
	form: {
		display: 'flex',
		flex: 1,
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,		
	},
	input: {
		height: 40,
		margin: 12,
		backgroundColor: LIGHT_COLOR,
		padding: 10,
		borderRadius: 5,
	},
	pressedinput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		backgroundColor: LIGHT_COLOR,
		borderColor: MAIN_COLOR,
	}
});
