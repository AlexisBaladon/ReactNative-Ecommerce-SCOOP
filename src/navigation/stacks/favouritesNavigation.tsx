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
                title: 'Favoritos',
                headerStyle: { backgroundColor: 'white' },
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={({ route }) => ({
                    title: route.params?.name,
                })}
            />
        </Stack.Navigator>
	);
};

export default StoreNavigator;
