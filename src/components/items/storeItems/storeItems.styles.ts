import { StyleSheet } from 'react-native';

const createStyles = (height: number) =>
	StyleSheet.create({
		itemsContainer: {
			width: '100%',
			paddingHorizontal: 10,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
		},
		items: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
		},
		item: {
			minHeight: 300,
			width: height*0.6, height: height,
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
