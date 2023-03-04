import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type {
	OnboardingParams,
	OnboardingParamList,
} from '../../navigation/types/onboarding.types';
import { OnboardingTemplate } from '../../components';
import type { ImageSourcePropType } from 'react-native';
import { TEXT } from '../../constants';

const imagesSrc: Array<ImageSourcePropType | undefined> = [
	require('./onboarding1.png'),
	require('./onboarding2.png'),
	require('./onboarding3.png'),
];

type OnboardingScreen1NavigationProp = NativeStackScreenProps<OnboardingParamList, 'Onboarding1'>;
type OnboardingScreen2NavigationProp = NativeStackScreenProps<OnboardingParamList, 'Onboarding2'>;
type OnboardingScreen3NavigationProp = NativeStackScreenProps<OnboardingParamList, 'Onboarding3'>;

const {
	ONBOARDING1_TITLE,
	ONBOARDING1_DESCRIPTION,
	ONBOARDING2_TITLE,
	ONBOARDING2_DESCRIPTION,
	ONBOARDING3_TITLE,
	ONBOARDING3_DESCRIPTION,
} = TEXT;

const onboardingTexts = [
	{
		title: ONBOARDING1_TITLE,
		description: ONBOARDING1_DESCRIPTION,
	},
	{
		title: ONBOARDING2_TITLE,
		description: ONBOARDING2_DESCRIPTION,
	},
	{
		title: ONBOARDING3_TITLE,
		description: ONBOARDING3_DESCRIPTION,
	},
];

const onboardingScreens = onboardingTexts.map((text, index) => {
	return function getOnboardingScreen(navigatePrev: () => void, navigateNext: () => void) {
		return (
			<OnboardingTemplate
				key={index}
				titleMessage={text.title}
				description={text.description}
				currentIndex={index}
				navigatePrev={navigatePrev}
				navigateNext={navigateNext}
				sliderWidth={110}
				sliderLength={3}
				buttonWidth={50}
				imageSrc={imagesSrc[index]}
			/>
		);
	};
});

const navProps: OnboardingParams = { animation: 'slide_from_right', headerShown: false };

const OnboardingScreen1: React.FC<OnboardingScreen1NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => {
		navigation.navigate('Onboarding2', navProps);
	};
	const navigatePrev = (): void => {};
	return onboardingScreens[0](navigatePrev, navigateNext);
};

const OnboardingScreen2: React.FC<OnboardingScreen2NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => {
		navigation.navigate('Onboarding3', navProps);
	};
	const navigatePrev = (): void => {
		navigation.navigate('Onboarding1', navProps);
	};
	return onboardingScreens[1](navigatePrev, navigateNext);
};

const OnboardingScreen3: React.FC<OnboardingScreen3NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => {
		navigation.navigate('Home', { name: 'Tienda' });
	};
	const navigatePrev = (): void => {
		navigation.navigate('Onboarding2', navProps);
	};
	return onboardingScreens[2](navigatePrev, navigateNext);
};

export default { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3 };
