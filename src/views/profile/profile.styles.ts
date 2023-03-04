import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: height * 0.5,
	},
	logoutButton: {
		position: 'absolute',
		top: height * 0.05,
		right: 20,
		padding: 5,
		borderRadius: 10,
	},
	logoutButtonText: {
		color: COLORS.LIGHT_COLOR,
	},
	choosePictureContainer: {
		backgroundColor: COLORS.MAIN_COLOR,
		alignItems: 'center',
		paddingVertical: 20,
	},
	tableContainer: {
		width: '100%',
		alignItems: 'center',
		paddingVertical: 20,
	},
	tableHeader: {
		alignSelf: 'flex-start',
		marginHorizontal: 25,
		display: 'flex',
		flexDirection: 'row',
	},
	table: {
		marginTop: 10,
		flex: 0,
		width: '90%',
		backgroundColor: 'gray',
		borderRadius: 10,
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: COLORS.MAIN_COLOR,
	},
	text: {},
	titleText: {
		color: COLORS.MAIN_COLOR,
	},
});

export default styles;
