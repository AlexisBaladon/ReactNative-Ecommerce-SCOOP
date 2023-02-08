import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { RootBottomTabParamList } from './types/tabs.types'
import StoreNavigator from './storeNavigation';
import CartNavigator from './cartNavigation';
import FavouritesNavigator from './favouritesNavigation';
import { NavigationContainer } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const TabsNavigator: React.FC = () => {
  return (
	<NavigationContainer independent={true}>
        <BottomTab.Navigator
            initialRouteName="StoreTab"
            screenOptions={{ headerShown: false }}
        >
            <BottomTab.Screen
                name="StoreTab"
                component={StoreNavigator}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
            />
            <BottomTab.Screen
                name="FavouritesTab"
                component={FavouritesNavigator}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigator