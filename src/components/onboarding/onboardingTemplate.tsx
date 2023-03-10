import React from 'react';
import { View, Image, type ImageSourcePropType, StatusBar } from 'react-native';
import AdvanceButton from '../global/buttons/advanceButton/advanceButton';
import CustomText from '../global/customText/customText';
import Slider from '../global/slider/slider';
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
	return (<>
		<StatusBar backgroundColor="transparent" barStyle="light-content" />
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
	</>);
};

export default OnboardingTemplate;
