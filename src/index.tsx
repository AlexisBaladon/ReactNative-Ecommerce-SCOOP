import { useFonts } from 'expo-font';
import { Fonts as fonts } from './assets';
import { CartItemContextComponents, FavouritesContextComponents } from './context';
import { Provider } from 'react-redux';
import store from './store';
import OnboardingNavigator from './navigation/onboardingNavigation';

const App = (): React.ReactElement => {
	const [loaded] = useFonts(fonts);
	const { CartItemContextProvider } = CartItemContextComponents;
	const { FavouriteItemsContextProvider } = FavouritesContextComponents;

	if (!loaded) return <></>; // TODO: Add a loading screen

	return (
		<Provider store={store}>
			<CartItemContextProvider>
				<FavouriteItemsContextProvider>
					<OnboardingNavigator />
				</FavouriteItemsContextProvider>
			</CartItemContextProvider>
		</Provider>
	);
};

export default App;
