import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	itemsContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	items: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	itemsTwoColumns: {
		padding: 10,
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

export default styles;
