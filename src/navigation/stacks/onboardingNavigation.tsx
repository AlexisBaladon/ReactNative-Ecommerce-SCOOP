import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreens } from '../../views';
import { type OnboardingParamList } from '../types/onboarding.types';
import TabsNavigator from '../tabs/tabs';
import { NavigationContainer } from '@react-navigation/native';
const { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3 } = OnboardingScreens;

const Stack = createNativeStackNavigator<OnboardingParamList>();

const OnboardingNavigator: React.FC = () => {
	return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Onboarding1"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Onboarding1"
                    component={OnboardingScreen1}
                    options={({ route }) => ({
                        animation: route.params?.animation ?? 'slide_from_right',
                        headerShown: route.params?.headerShown ?? false,
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
                    name="Home"
                    component={TabsNavigator}
                    options={({ route }) => ({
                        title: route.params?.name,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
	);
};

export default OnboardingNavigator;
