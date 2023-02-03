import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { MAIN_COLOR, LIGHT_COLOR } = COLORS;

const styles = StyleSheet.create({
	counter: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: LIGHT_COLOR,
		borderRadius: 25,
		width: '100%',
	},
	addDecButton: {
		width: '100%',
	},
	text: {
		color: MAIN_COLOR,
		textAlign: 'center',
		fontSize: 16,
	},
});

export default styles;
