import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '../views';
import { type CartParamList } from './types/cart.types';

const Stack = createNativeStackNavigator<CartParamList>();

const StoreNavigator: React.FC = () => {
	return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                title: 'Carrito',
                headerStyle: { backgroundColor: 'white' },
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={({ route }) => ({
                    title: route.params?.name,
                })}
            />
        </Stack.Navigator>
	);
};

export default StoreNavigator;
