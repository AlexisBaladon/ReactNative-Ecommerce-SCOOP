import { useFonts } from 'expo-font';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Fonts as fonts } from './assets';

import Navbar from './components/global/navbar/navbar';
import { ItemContextComponents } from './context';
import CartScreen from './views/cart/cart';
import FavouritesScreen from './views/favourites/favourites';
import StoreScreen from './views/store/store';


enum Screen {
    STORE,
    CART,
    FAVOURITES,
}

const App = () => {
    const [loaded] = useFonts(fonts);
    
    const { ItemContextProvider } = ItemContextComponents;
    const [screen, setScreen] = useState<Screen>(Screen.STORE)
    
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
                <CurrentScreen />
            </View>
            <Navbar chosenIcon={screen} setChosenIcon={setScreen}/>
        </ItemContextProvider>
    );
};

const styles = StyleSheet.create({
	app: {
        flex: 1,
	},
});

export default App;
