import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
    
	addToCartButtonDisabled: {
		backgroundColor: NEUTRAL_COLOR,
	},
	addToCartButtonText: {
		color: 'white',
		fontSize: 10,
		textAlign: 'center',
	},
	priceContainer: {
		position: 'absolute',
		bottom: 0,
		right: 0, left: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	itemPrice: {
		color: MAIN_COLOR,
		fontSize: 19,
	},
	addToCartButton: {
		backgroundColor: MAIN_COLOR,
		marginBottom: 5, padding: 5,
		borderRadius: 7.5,
		width: 60, height: 30,
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
});

export default styles;