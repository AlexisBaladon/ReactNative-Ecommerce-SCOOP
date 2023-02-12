import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StoreScreen, DetailScreen } from '../../views';
import { type StoreParamList } from '../types/store.types';

const Stack = createNativeStackNavigator<StoreParamList>();

const StoreNavigator: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName="Store"
			screenOptions={{
				headerStyle: { backgroundColor: 'white' },
				headerTitleStyle: { fontWeight: 'bold' },
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen
				name="Store"
				component={StoreScreen}
				options={{
					title: 'Tienda',
				}}
			/>
			<Stack.Screen
				name="Detail"
				component={DetailScreen}
				options={({ route }) => ({
					title: route.params?.name,
				})}
			/>
		</Stack.Navigator>
	);
};

export default StoreNavigator;
