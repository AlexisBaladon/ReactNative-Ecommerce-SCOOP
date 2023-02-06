import type { StackAnimationTypes } from 'react-native-screens/lib/typescript/types';
import { type DtItem } from '../interfaces';

type NavParams = {
	name: string,
}

type OnboardingParams = {
	animation: StackAnimationTypes | undefined,
	headerShown: boolean | undefined,
}

export type NavbarParamList = {
	Cart: NavParams;
	Favourites: NavParams;
	Store: NavParams;
}

export type OnboardingParamList = {
	Onboarding1: OnboardingParams;
	Onboarding2: OnboardingParams;
	Onboarding3: OnboardingParams;
}

export type DetailParamList = {
	Detail: NavParams & { item: DtItem };
}

export type RootStackParamList = NavbarParamList &
								 DetailParamList &
								 OnboardingParamList;
