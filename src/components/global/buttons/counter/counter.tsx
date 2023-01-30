import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import CustomText from '../../customText/customText';
import styles from './counter.styles';

interface IProps {
	addCharacter: string;
	decCharacter: string;
	addToCounter: () => void;
	count: number;
	decToCounter: () => void;
}

const Counter: React.FC<IProps> = ({
	addCharacter,
	decCharacter,
	addToCounter,
	count,
	decToCounter,
}) => {
	const onChangeCount = (text: string) => {
		const inputCount = Number.parseInt(text);
		if (!Number.isNaN(inputCount)) {
			const addedCount = inputCount - count;
			if (addedCount > 0) addToCounter();
			else decToCounter();
		}
	};

	return (
		<>
			<View style={styles.counter}>
				<TouchableOpacity style={styles.addDecButton} onPress={() => addToCounter()}>
					<CustomText textType={'bold'} style={styles.text}>{addCharacter}</CustomText>
				</TouchableOpacity>
				<TextInput
					style={styles.text}
					keyboardType={'numeric'}
					onChangeText={onChangeCount}
				>
					<CustomText textType={'bold'} style={styles.text}>{count}</CustomText>
				</TextInput>
				<TouchableOpacity style={styles.addDecButton} onPress={() => decToCounter()}>
					<CustomText textType={'bold'} style={styles.text}>{decCharacter}</CustomText>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Counter;
