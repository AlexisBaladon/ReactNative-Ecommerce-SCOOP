import React from 'react';
import { FlatList, View } from 'react-native';
import Button from '../button/button';
import styles from './buttons.styles';

interface ButtonT {
	title: string;
	onPress: () => void;
	pressed: boolean;
	backgroundColor?: string;
	color?: string;
	pressedBackgroundColor?: string;
	pressedColor?: string;
}

interface IProps {
	buttons: ButtonT[];
}

const Buttons: React.FC<IProps> = ({ buttons }) => {
	return (
		<FlatList
			contentContainerStyle={{paddingBottom: 3}}
			data={buttons}
			renderItem={({ item }) => (
				<View style={styles.categoryContainer}>
					<Button
						title={item.title}
						isSelected={item.pressed}
						onPress={item.onPress}
						backgroundColor={item.backgroundColor}
						color={item.color}
						pressedBackgroundColor={item.pressedBackgroundColor}
						pressedColor={item.pressedColor}
					/>
				</View>
			)}
			keyExtractor={(item) => item.title}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		/>
	);
};

export default Buttons;
