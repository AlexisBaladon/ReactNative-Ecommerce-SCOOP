import { useFonts } from 'expo-font';
import { Fonts as fonts } from './assets';
import { CartItemContextComponents, FavouritesContextComponents } from './context';
import StoreNavigation from './navigation/storeNavigation';

const App = (): React.ReactElement => {
	const [loaded] = useFonts(fonts);
	const { CartItemContextProvider } = CartItemContextComponents;
	const { FavouriteItemsContextProvider } = FavouritesContextComponents;

	if (!loaded) return <></>; // TODO: Add a loading screen

	return (
		<CartItemContextProvider>
			<FavouriteItemsContextProvider>
				<StoreNavigation />
			</FavouriteItemsContextProvider>
		</CartItemContextProvider>
	);
};

export default App;
