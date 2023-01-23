import React from 'react';
import { View } from 'react-native';
import Button from '../button/button';
import styles from './buttons.styles';

interface IProps {
	buttons: Array<{ title: string; onPress: () => void }>;
}

const Buttons: React.FC<IProps> = ({ buttons }) => {
	return (
		<View style={styles.categoriesContainer}>
			{buttons.map((but, i) => {
				return (
					<View style={styles.categoryContainer} key={i}>
						<Button title={but.title} isSelected={i == 0} onPress={but.onPress} />
					</View>
				);
			})}
		</View>
	);
};

export default Buttons;
