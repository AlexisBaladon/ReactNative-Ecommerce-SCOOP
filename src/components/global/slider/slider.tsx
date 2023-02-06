import createStyles from './slider.styles';
import React from 'react';
import { View } from 'react-native'

interface IProps {
    currentIndex: number;
    length: number;
    sliderWidth?: number;
}

const Slider: React.FC<IProps> = ({ currentIndex, length, sliderWidth = 100 }) => {
    const styles = createStyles(sliderWidth)

    return (
        <View style={styles.slider}>
            {Array.from({ length }, (_, index) => (
                <View key={index} style={[styles.slice, currentIndex === index && styles.selectedSlice]} />
            ))}
        </View>
    );
};

export default Slider;
