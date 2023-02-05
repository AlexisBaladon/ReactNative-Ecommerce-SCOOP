import React from 'react';
import { View, TouchableOpacity } from 'react-native';
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
	return (
		<>
			<View style={styles.counter}>
				<TouchableOpacity style={styles.addDecButton} onPress={() => addToCounter()}>
					<CustomText textType={'bold'} style={styles.text}>
						{addCharacter}
					</CustomText>
				</TouchableOpacity>
				<CustomText textType={'bold'} style={styles.text}>
					{count}
				</CustomText>
				<TouchableOpacity style={styles.addDecButton} onPress={() => decToCounter()}>
					<CustomText textType={'bold'} style={styles.text}>
						{decCharacter}
					</CustomText>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Counter;
