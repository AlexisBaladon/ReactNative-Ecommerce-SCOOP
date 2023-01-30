import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View } from 'react-native';

import { Fonts as fonts } from './assets';
import CustomText from './components/global/customText/customText';
import styles from './styles';

import Navbar from './components/global/navbar/navbar';
import { CartItemContextComponents, FavouritesContextComponents } from './context';

import CartScreen from './views/cart/cart';
import FavouritesScreen from './views/favourites/favourites';
import StoreScreen from './views/store/store';

enum Screen {
    STORE,
    CART,
    FAVOURITES,
}

const titles = ['Tienda', 'Carrito', 'Favoritos']

const App = () => {
    const [loaded] = useFonts(fonts);
    const { CartItemContextProvider } = CartItemContextComponents;
    const { FavouriteItemsContextProvider } = FavouritesContextComponents;
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
            <FavouriteItemsContextProvider>
                <View style={styles.app}>
                    <View style={styles.header}>
                        <CustomText style={styles.title}>{title}</CustomText>
                    </View>
                    <View style={styles.currentScreen}>
                        <CurrentScreen />
                    </View>
                </View>
                <View style={styles.navbarContainer}>
                    <Navbar chosenIcon={screen} setChosenIcon={setScreen}/>
                </View>
            </FavouriteItemsContextProvider>
        </CartItemContextProvider>
    );
};

export default App;
