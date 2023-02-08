import type { StackAnimationTypes } from 'react-native-screens/lib/typescript/types';

export type OnboardingParams = {
	animation: StackAnimationTypes | undefined;
	headerShown: boolean | undefined;
};

export type HomeParams = {
	name: string;
};

export type OnboardingParamList = {
	Onboarding1: OnboardingParams;
	Onboarding2: OnboardingParams;
	Onboarding3: OnboardingParams;
	Home: HomeParams;
};
