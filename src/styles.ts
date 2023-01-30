import { Dimensions, StatusBar, StyleSheet } from 'react-native';

import { COLORS } from './constants';

const { BACKGROUND_COLOR } = COLORS;
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
const headerHeight = 100;
const searchHeight = 60;
const navbarHeight = 60;

const styles = StyleSheet.create({
	app: {
		flex: 1,
		width: width,
		backgroundColor: BACKGROUND_COLOR,
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		height: headerHeight,
        paddingTop: statusBarHeight,
	},
	title: {
		fontSize: 28,
		textAlign: 'center',
	},
	search: {
		height: searchHeight,
	},
    currentScreen: {
        height: height - headerHeight - searchHeight - navbarHeight + statusBarHeight,
        paddingBottom: 15,
    },
    navbarContainer: {
        height: navbarHeight,
    }
});

export default styles;
