import { useFonts } from 'expo-font';

import { Fonts as fonts } from './assets';
import { CartItemContextComponents, FavouritesContextComponents } from './context';
import StoreNavigation from './navigation/storeNavigation';

const titles = ['Tienda', 'Carrito', 'Favoritos'];

const App = () => {
	const [loaded] = useFonts(fonts);
	const { CartItemContextProvider } = CartItemContextComponents;
	const { FavouriteItemsContextProvider } = FavouritesContextComponents;

	if (!loaded) return null; //TODO: spinner

	return (
		<CartItemContextProvider>
			<FavouriteItemsContextProvider>
				<StoreNavigation />
			</FavouriteItemsContextProvider>
		</CartItemContextProvider>
	);
};

export default App;
