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
	handleStates?: boolean,
}

const Buttons: React.FC<IProps> = ({ buttons, handleStates = false }) => {
	const [pressed, setPressed] = React.useState<boolean[]>(buttons.map((but) => but.pressed));

	const handleOnPress = handleStates ? (i: number): void => {
		const newPressed = pressed.map((_, j) => (i === j));
		setPressed(newPressed);
		buttons[i].onPress();
	}
	: () => {};

	return (
		<View style={styles.categoriesContainer}>
			{buttons.map((but, i) => {
				return (
					<View style={styles.categoryContainer} key={i}>
						<Button
							title={but.title}
							isSelected={pressed[i]}
							onPress={() => {handleOnPress(i)}}
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
