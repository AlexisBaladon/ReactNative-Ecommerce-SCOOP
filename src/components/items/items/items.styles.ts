import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	items: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
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
