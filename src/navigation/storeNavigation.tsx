import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StoreScreen, CartScreen, FavouritesScreen } from '../views';
import { type RootStackParamList } from './types';
import DetailScreen from '../views/detail/detail';
import { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3} from '../views/onboarding/onboarding';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StoreNavigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Onboarding1"
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
					name="Onboarding1"
					component={OnboardingScreen1}
					options={({ route }) => ({
						animation: route.params?.animation,
						headerShown: route.params?.headerShown,
					})}
				/>
				<Stack.Screen
					name="Onboarding2"
					component={OnboardingScreen2}
					options={({ route }) => ({
						animation: route.params?.animation,
						headerShown: route.params?.headerShown,
					})}
					
				/>
				<Stack.Screen
					name="Onboarding3"
					component={OnboardingScreen3}
					options={({ route }) => ({
						animation: route.params?.animation,
						headerShown: route.params?.headerShown,
					})}
				/>
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
