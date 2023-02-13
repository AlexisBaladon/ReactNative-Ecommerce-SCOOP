import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

const { LIGHT_COLOR, MAIN_COLOR } = COLORS;

const { width, height } = Dimensions.get('window');

const createStyles = (spaceFromBottom: number = 0): any => StyleSheet.create({
	item: {
		minHeight: 150,
		height: height * 0.2,
		width,
		paddingHorizontal: '6%',
		marginVertical: 15,
		borderColor: LIGHT_COLOR,
		borderWidth: 1,
		borderRadius: 15,
	},
	search: {
		marginVertical: 15,
	},
	orderDescription: {
		padding: 15,
		paddingBottom: 5,
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: height * 0.075,
		bottom: spaceFromBottom - 5,
	},
	button: {
		height: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
		justifySelf: 'center',
		alignSelf: 'center',

	},
    checkoutButton: {
		width: width * 0.7,
        backgroundColor: MAIN_COLOR,
    },
	deleteButton: {
		width: width * 0.15,
		backgroundColor: '#f00000',
	},
	deleteIcon: {
		tintColor: '#fff',
		width: 35,
		height: 35,

	},
    buttonText: {
        color: LIGHT_COLOR,
    },
});

export default createStyles;
