import { useFonts } from 'expo-font';
import { Fonts as fonts } from './assets';
import { CartItemContextComponents } from './context';
import { Provider } from 'react-redux';
import store from './store';
import { OnboardingNavigation } from './navigation/stacks';

const App = (): React.ReactElement => {
	const [loaded] = useFonts(fonts);
	const { CartItemContextProvider } = CartItemContextComponents;

	if (!loaded) return <></>; // TODO: Add a loading screen

	return (
		<Provider store={store}>
			<CartItemContextProvider>
				<OnboardingNavigation />
			</CartItemContextProvider>
		</Provider>
	);
};

export default App;
