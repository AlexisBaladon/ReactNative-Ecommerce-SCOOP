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
    setCurrentIndex: (index: number) => void;
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

const OnboardingTemplate: React.FC<IProps> = ({titleMessage, description, currentIndex, setCurrentIndex, imageSrc, sliderWidth, sliderLength, buttonWidth}) => {
    return (<View style={styles.onboarding}>
        <View style={styles.background}>
            <Image style={styles.image} source={imageSrc} />
        </View>
        <View style={styles.bottomInfo}>
            <CustomText textType='bold' size='big'>{titleMessage}</CustomText>
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
                    <AdvanceButton onPress={()=>{}} direction='left' width={buttonWidth}/>
                    <AdvanceButton onPress={()=>{}} direction='right' width={buttonWidth} active={true}/>
                </View>
            </View>
        </View>
    </View>
    );
};

type OnboardingScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const OnboardingScreen: React.FC<OnboardingScreenNavigationProp> = () => {        
    return (<>
        <OnboardingTemplate 
            titleMessage='¡Bienvenido a la app!'
            description='En esta app podrás buscar y encontrar los mejores productos de la tienda'
            currentIndex={0} 
            setCurrentIndex={() => { } } 
            sliderWidth={130}
            sliderLength={3} 
            buttonWidth={50}
            imageSrc={imagesSrc[0]} 
        />
        {/* <OnboardingTemplate 
            titleMessage='titleMessage'
            description='description'
            currentIndex={0} 
            setCurrentIndex={() => { } } 
            sliderLength={3} 
            buttonWidth={40}
            imageSrc={imagesSrc[1]} 
        />
        <OnboardingTemplate 
            titleMessage='titleMessage'
            description='description'
            currentIndex={0} 
            setCurrentIndex={() => { } } 
            sliderLength={3}
            buttonWidth={40} 
            imageSrc={imagesSrc[2]} 
        /> */}
    </>);
};


export default OnboardingScreen;