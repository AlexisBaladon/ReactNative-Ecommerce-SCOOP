import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20, paddingBottom: 5,
		backgroundColor: 'white',
		borderRadius: 15,

		shadowColor: '#000',
		shadowOffset: {width: 0,height: 2},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	itemImage: {
		width: '100%', height: '49%',
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0,height: 2,},
		elevation: 4,
	},
	textContainer: {
		width: '100%', height: '49%',
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
	priceContainer: {
		position: 'absolute',
		bottom: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	itemPrice: {
		color: MAIN_COLOR,
		fontSize: 20,
	},
	addToCartButton: {
		backgroundColor: MAIN_COLOR,
		marginBottom: 5, padding: 5,
		borderRadius: 7.5,
		width: 70, height: 30,
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	addToCartButtonText: {
		color: 'white',
		fontSize: 10,
		textAlign: 'center',
	}
});

export default styles;
