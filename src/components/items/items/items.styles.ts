import { StyleSheet } from 'react-native';

const paddingBottom = 65;

const createStyles = (heightPercentage: number = 100): any => StyleSheet.create({
	itemsContainer: {
		width: '100%',
		height: `${heightPercentage}%`,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 40,
		paddingBottom,
	},
	items: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	itemsTwoColumns: {
		marginHorizontal: 10,
	},
	emptyListTextContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom,
	},
	emptyListText: {
		textAlign: 'center',
		color: 'gray',
	},
});

export default createStyles;
