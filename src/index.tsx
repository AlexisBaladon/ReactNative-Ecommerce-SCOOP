import { useFonts } from 'expo-font';
import { Fonts as fonts } from './assets';
import { Provider } from 'react-redux';
import store from './store';
import { OnboardingNavigation } from './navigation/stacks';

const App = (): React.ReactElement => {
	const [loaded] = useFonts(fonts);


	if (!loaded) return <></>; // TODO: Add a loading screen

	return (
		<Provider store={store}>
			<OnboardingNavigation />
		</Provider>
	);
};

export default App;
