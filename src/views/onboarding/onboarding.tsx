import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { OnboardingParams, RootStackParamList } from '../../navigation/types';
import { OnboardingTemplate } from '../../components';
import type { ImageSourcePropType } from 'react-native';

const imagesSrc: Array<ImageSourcePropType | undefined> = [
	require('./onboarding1.png'),
	require('./onboarding2.png'),
	require('./onboarding3.png'),
];

type OnboardingScreen1NavigationProp = NativeStackScreenProps<RootStackParamList, 'Onboarding1'>;
type OnboardingScreen2NavigationProp = NativeStackScreenProps<RootStackParamList, 'Onboarding2'>;
type OnboardingScreen3NavigationProp = NativeStackScreenProps<RootStackParamList, 'Onboarding3'>;

const onboardingScreens = [0, 1, 2].map((index) => {
	return function getOnboardingScreen(navigatePrev: () => void, navigateNext: () => void) {
		return (
			<OnboardingTemplate
				key={index}
				titleMessage="¡Bienvenido a la app!"
				description="En esta app podrás buscar y encontrar los mejores productos de la tienda"
				currentIndex={index}
				navigatePrev={navigatePrev}
				navigateNext={navigateNext}
				sliderWidth={130}
				sliderLength={3}
				buttonWidth={50}
				imageSrc={imagesSrc[index]}
			/>
		);
	};
});

const navProps: OnboardingParams = { animation: 'slide_from_right', headerShown: false };

const OnboardingScreen1: React.FC<OnboardingScreen1NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => { navigation.navigate('Onboarding2', navProps); };
	const navigatePrev = (): void => {};
	return onboardingScreens[0](navigatePrev, navigateNext);
};

const OnboardingScreen2: React.FC<OnboardingScreen2NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => { navigation.navigate('Onboarding3', navProps); };
	const navigatePrev = (): void => { navigation.navigate('Onboarding1', navProps); };
	return onboardingScreens[1](navigatePrev, navigateNext);
};

const OnboardingScreen3: React.FC<OnboardingScreen3NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => { navigation.navigate('Store', { name: 'Tienda' }); };
	const navigatePrev = (): void => { navigation.navigate('Onboarding2', navProps); };
	return onboardingScreens[2](navigatePrev, navigateNext);
};

export { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3 };
