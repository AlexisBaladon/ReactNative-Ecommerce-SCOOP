import { useFonts } from 'expo-font';
import { Fonts as fonts } from './assets';
import { Provider } from 'react-redux';
import store from './store';
import { OnboardingNavigation } from './navigation/stacks';
import { ActivityIndicator } from 'react-native';
import { init as initializeDatabase } from './db';

initializeDatabase()
	.then(() => {
		console.log('Database initialized');
	})
	.catch((err) => {
		console.log('Database failed to initialize', err);
	});

const App = (): React.ReactElement => {
	const [loaded] = useFonts(fonts);

	if (!loaded) return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;

	return (
		<Provider store={store}>
			<OnboardingNavigation />
		</Provider>
	);
};

export default App;
