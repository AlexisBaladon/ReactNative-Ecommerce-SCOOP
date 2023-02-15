import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FavouritesScreen } from '../../views';
import { type FavouritesParamList } from '../types/favourites.types';

const Stack = createNativeStackNavigator<FavouritesParamList>();

const StoreNavigator: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName="Favourites"
			screenOptions={{
				headerStyle: { backgroundColor: 'white' },
				headerTitleAlign: 'center',
				headerTitleStyle: { fontWeight: 'bold' },
			}}
		>
			<Stack.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					title: 'Favoritos',
				}}
			/>
		</Stack.Navigator>
	);
};

export default StoreNavigator;
