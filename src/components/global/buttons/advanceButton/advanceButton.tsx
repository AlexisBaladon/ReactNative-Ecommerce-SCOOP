import React from 'react';
import { Image, Pressable } from 'react-native';
import createStyles from './advanceButton.styles';

interface IProps {
	onPress: () => void;
	direction?: Direction;
	active?: boolean;
	width?: number;
}

const directions = ['right', 'up', 'left', 'down'] as const;
type Direction = (typeof directions)[number];

const degreesRotated = new Map<Direction, any>(
	directions.map((direction, index) => {
		const degrees = index * 90;
		return [direction, { transform: [{ rotate: `${degrees}deg` }] }];
	}),
);

const AdvanceButton: React.FC<IProps> = ({
	onPress,
	direction = 'right',
	active = false,
	width = 50,
}) => {
	const styles = createStyles(width);
	return (
		<Pressable 
			onPress={onPress} 
			style= {({pressed}) => [
				styles.container, active && styles.activeButton,
				pressed && styles.pressedButton
			]}
		>
			<Image
				style={[styles.icon, degreesRotated.get(direction), active && styles.activeIcon]}
				source={require('./arrow.png')}
			/>
		</Pressable>
	);
};

export default AdvanceButton;
