import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/index';

const { LIGHT_COLOR } = COLORS;

const createStyles = (height: number) =>
	StyleSheet.create({
		items: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		item: {
			minHeight: 300,
			width: height*0.615, height: height,
			margin: 10,
		},
		emptyListTextContainer: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		emptyListText: {
			fontSize: 20,
			textAlign: 'center',
			color: 'gray',
		},
	});

export default createStyles;
