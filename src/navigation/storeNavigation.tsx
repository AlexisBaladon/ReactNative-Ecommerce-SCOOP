import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StoreScreen, CartScreen, FavouritesScreen } from '../views';
import { type RootStackParamList } from './types';
import DetailScreen from '../views/detail/detail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StoreNavigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Store"
				screenOptions={{
					headerStyle: {
						backgroundColor: 'white',
					},
					headerTitleAlign: 'center',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					title: 'Tienda',
				}}
			>
				<Stack.Screen
					name="Store"
					component={StoreScreen}
					options={({ route }) => ({
						title: route.params?.name,
					})}
				/>
				<Stack.Screen
					name="Cart"
					component={CartScreen}
					options={({ route }) => ({
						title: route.params?.name,
					})}
				/>
				<Stack.Screen
					name="Favourites"
					component={FavouritesScreen}
					options={({ route }) => ({
						title: route.params?.name,
					})}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					options={({ route }) => ({
						title: route.params?.name,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StoreNavigation;
