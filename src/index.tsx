import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View } from 'react-native';

import { Fonts as fonts } from './assets';
import { TEXT } from './constants';
import { Search } from './components';
import CustomText from './components/global/customText/customText';
import styles from './styles';

import Navbar from './components/global/navbar/navbar';
import OptionsContainer from './components/options/options/optionsContainer';
import { CartItemContextComponents } from './context';
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
    const { CartItemContextProvider } = CartItemContextComponents;
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
        <CartItemContextProvider>
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
                <View style={styles.currentScreen}>
                    <CurrentScreen />
                </View>
            </View>
            <View style={styles.navbarContainer}>
                <Navbar chosenIcon={screen} setChosenIcon={setScreen}/>
            </View>
        </CartItemContextProvider>
    );
};

export default App;
