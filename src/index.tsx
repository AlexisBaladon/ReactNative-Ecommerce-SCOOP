import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';

import { Fonts as fonts } from './assets';
import { Search } from './components';
import CustomText from './components/global/customText/customText';

import Navbar from './components/global/navbar/navbar';
import OptionsContainer from './components/options/options/optionsContainer';
import { ItemContextComponents } from './context';
import CartScreen from './views/cart/cart';
import FavouritesScreen from './views/favourites/favourites';
import StoreScreen from './views/store/store';

enum Screen {
    STORE,
    CART,
    FAVOURITES,
}

const {
    SEARCH_PLACEHOLDER,
    ADD_BUTTON_MESSAGE,
    DELETE_ALL_ITEMS_TITLE,
    DELETE_ALL_ITEMS_DESCRIPTION,
    CANCEL_TITLE,
} = TEXT;

const titles = ['Tienda', 'Carrito', 'Favoritos']

const App = () => {
    const [loaded] = useFonts(fonts);
    const { ItemContextProvider } = ItemContextComponents;
    const [screen, setScreen] = useState<Screen>(Screen.STORE)

    const title = titles[screen];

    const CurrentScreen: React.FC = () => {
        const { STORE, CART } = Screen;
        if (screen === STORE) return <StoreScreen />;
        if (screen === CART) return <CartScreen />;
        return <FavouritesScreen />;
    }

    if (!loaded) return null; //TODO: spinner

    return (
        <ItemContextProvider>
            <View style={styles.app}>
                <View style={styles.header}>
                    <CustomText style={styles.title}>{title}</CustomText>
                </View>
                <View style={styles.search}>
                    <Search placeHolder={SEARCH_PLACEHOLDER} />
                </View>
                <View style={styles.options}>
                    <OptionsContainer
                        addButtonTitle={ADD_BUTTON_MESSAGE}
                        deleteAllButtonTitle={DELETE_ALL_ITEMS_TITLE}
                        deleteAllAlertDescription={DELETE_ALL_ITEMS_DESCRIPTION}
                        cancelButtonTitle={CANCEL_TITLE}
                    />
                </View>
                <CurrentScreen />
            </View>
            <Navbar chosenIcon={screen} setChosenIcon={setScreen}/>
        </ItemContextProvider>
    );
};


import { COLORS, TEXT } from './constants';

const { BACKGROUND_COLOR } = COLORS;
const { width } = Dimensions.get('window');
const headerHeight = 100;
const searchHeight = 70;
const optionsHeight = 40;

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
		paddingTop: StatusBar.currentHeight,
	},
	title: {
		fontSize: 28,
		textAlign: 'center',
	},
	search: {
		height: searchHeight,
	},
	options: {
		height: optionsHeight,
	},
});

export default App;
