import React from 'react';
import { View } from 'react-native';
import Button from '../button/button';
import styles from './buttons.styles';

interface IProps {
	buttons: Array<{
		title: string;
		onPress: () => void;
		pressed: boolean;
		backgroundColor?: string;
		color?: string;
		pressedBackgroundColor?: string;
		pressedColor?: string;
	}>;
}

const Buttons: React.FC<IProps> = ({ buttons }) => {
	return (
		<View style={styles.categoriesContainer}>
			{buttons.map((but, i) => {
				return (
					<View style={styles.categoryContainer} key={i}>
						<Button
							title={but.title}
							isSelected={but.pressed}
							onPress={but.onPress}
							backgroundColor={but.backgroundColor}
							color={but.color}
							pressedBackgroundColor={but.pressedBackgroundColor}
							pressedColor={but.pressedColor}
						/>
					</View>
				);
			})}
		</View>
	);
};

export default Buttons;
