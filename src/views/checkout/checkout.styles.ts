import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { MAIN_COLOR, LIGHT_COLOR } = COLORS;
const { width } = Dimensions.get('window');

const marginHorizontal = 10;

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
		marginBottom: 0,
		borderRadius: 15,
		backgroundColor: MAIN_COLOR,
	},
	brand: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		width: '50%',
		marginBottom: 20,
	},
	storeIcon: {
		width: 50,
		height: 50,
		tintColor: LIGHT_COLOR,
	},
	priceTitle: {
		marginBottom: -10,
	},
	costDataDescription: {
		marginTop: 20,
	},
	itemCheckoutScroll: {
		backgroundColor: 'white',
	},
	paymentButton: {
		backgroundColor: '#60a478',
		padding: 15,
		borderRadius: 15,
		alignSelf: 'flex-start',
		marginTop: 5,
		marginBottom: -5,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 3,
	},
	buttonContainer: {
		// background white with opacity
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderTopRadius: 25,
		position: 'absolute',
		bottom: 0,
	},
	checkoutButton: {
		padding: 15,
		margin: 20,
		width: width - 40,
		borderRadius: 15,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: MAIN_COLOR,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	form: {
		display: 'flex',
		flex: 1,
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: marginHorizontal * 1.5,
		marginBottom: 100,
	},
	formItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingHorizontal: marginHorizontal,
		paddingVertical: marginHorizontal * 1.25,
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
		borderColor: 'rgba(0,0,0,0.2)',
		borderWidth: 1,
	},
	pressedinput: {
		borderWidth: 1,
		borderColor: MAIN_COLOR,
	},
});
