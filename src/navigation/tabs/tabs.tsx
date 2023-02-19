import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { RootBottomTabParamList } from '../types/tabs.types'
import StoreNavigator from '../stacks/storeNavigation';
import CartNavigator from '../stacks/cartNavigation';
import FavouritesNavigator from '../stacks/favouritesNavigation';
import { NavigationContainer } from '@react-navigation/native';
import styles from './tabs.styles';
import { useDispatch } from 'react-redux';
import { getStoreItems } from '../../store/actions';
import { type ItemFetchParameters } from '../../store/types';
import { AuthScreen } from '../../views';

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const iconsImages = {
	home: require('./home.png'),
	cart: require('./cart.png'),
	favourites: require('./liked.png'),
	profile: require('./profile.png'),
};

const TabsNavigator: React.FC = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		const storeParameters: ItemFetchParameters = {orderBy: 'type', orderDirection: 'asc'};
		dispatch(getStoreItems(storeParameters) as any);
	}, [])

	return (
		<NavigationContainer independent={true}>
			<BottomTab.Navigator
				initialRouteName="StoreTab"
				screenOptions={{
					headerShown: false,
					tabBarStyle: styles.tabBar,
					tabBarHideOnKeyboard: true,
				}}
			>
				<BottomTab.Screen
					name="StoreTab"
					component={StoreNavigator}
					options={{
						title: '',
						tabBarIcon: ({ focused }) => (
							<Image
								source={iconsImages.home}
								style={[styles.icon, focused && styles.chosenIcon]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="CartTab"
					component={CartNavigator}
					options={{
						title: '',
						tabBarIcon: ({ focused }) => (
							<Image
								source={iconsImages.cart}
								style={[styles.icon, focused && styles.chosenIcon]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="FavouritesTab"
					component={FavouritesNavigator}
					options={{
						title: '',
						tabBarIcon: ({ focused }) => (
							<Image
								source={iconsImages.favourites}
								style={[styles.icon, focused && styles.chosenIcon]}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="ProfileTab"
					component={AuthScreen}
					options={{
						title: '',
						tabBarIcon: ({ focused }) => (
							<Image
								source={iconsImages.profile}
								style={[styles.icon, focused && styles.chosenIcon]}
							/>
						),
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

export default TabsNavigator;
