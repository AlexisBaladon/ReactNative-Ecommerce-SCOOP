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

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const iconsImages = {
	home: require('./home.png'),
	cart: require('./cart.png'),
	favourites: require('./liked.png'),
};

const TabsNavigator: React.FC = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		const dispatchAsync = async (): Promise<void> => {
			(await getStoreItems()(dispatch));
		};
		dispatchAsync().catch((error) => {console.log(error)});
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
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

export default TabsNavigator;
