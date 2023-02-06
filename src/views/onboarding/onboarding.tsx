import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { View, Image, type ImageSourcePropType } from 'react-native';
import { AdvanceButton, CustomText, Slider } from '../../components';
import styles from './onboarding.styles';

interface IProps {
	titleMessage: string;
	description: string;
	currentIndex: number;
	navigatePrev: () => void;
	navigateNext: () => void;
	imageSrc: ImageSourcePropType | undefined;
	sliderWidth: number;
	sliderLength: number;
	buttonWidth: number;
}

const imagesSrc: Array<ImageSourcePropType | undefined> = [
	require('./onboarding1.png'),
	require('./onboarding2.png'),
	require('./onboarding3.png'),
];

const OnboardingTemplate: React.FC<IProps> = ({
	titleMessage,
	description,
	currentIndex,
	navigatePrev,
	navigateNext,
	imageSrc,
	sliderWidth,
	sliderLength,
	buttonWidth,
}) => {
	return (
		<View style={styles.onboarding}>
			<View style={styles.background}>
				<Image style={styles.image} source={imageSrc} />
			</View>
			<View style={styles.bottomInfo}>
				<CustomText textType="bold" size="big">
					{titleMessage}
				</CustomText>
				<CustomText style={styles.description}>{description}</CustomText>
				<View style={styles.navigation}>
					<View style={styles.slider}>
						<Slider
							sliderWidth={sliderWidth}
							currentIndex={currentIndex}
							length={sliderLength}
						/>
					</View>
					<View style={styles.advanceButtons}>
						<AdvanceButton
							onPress={navigatePrev}
							direction="left"
							width={buttonWidth}
						/>
						<AdvanceButton
							onPress={navigateNext}
							direction="right"
							width={buttonWidth}
							active={true}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

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

const OnboardingScreen1: React.FC<OnboardingScreen1NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => {
		navigation.navigate('Onboarding2', { animation: 'slide_from_right', headerShown: false });
	};
	const navigatePrev = (): void => {};

	return onboardingScreens[0](navigatePrev, navigateNext);
};

const OnboardingScreen2: React.FC<OnboardingScreen2NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => {
		navigation.navigate('Onboarding3', { animation: 'slide_from_right', headerShown: false });
	};
	const navigatePrev = (): void => {
		navigation.navigate('Onboarding1', { animation: 'slide_from_left', headerShown: false });
	};

	return onboardingScreens[1](navigatePrev, navigateNext);
};

const OnboardingScreen3: React.FC<OnboardingScreen3NavigationProp> = ({ navigation }) => {
	const navigateNext = (): void => {
		navigation.navigate('Store', { name: 'Tienda' });
	};
	const navigatePrev = (): void => {
		navigation.navigate('Onboarding2', { animation: 'slide_from_left', headerShown: false });
	};

	return onboardingScreens[2](navigatePrev, navigateNext);
};

export { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3 };
