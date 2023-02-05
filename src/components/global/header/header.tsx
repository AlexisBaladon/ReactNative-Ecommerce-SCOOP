import React from 'react';
import { View } from 'react-native';
import CustomText from '../customText/customText';
import styles from './header.styles';

interface IProps {
	title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
	return (
		<View style={styles.header}>
			<CustomText style={styles.title} textType="bold">
				{title}
			</CustomText>
		</View>
	);
};

export default Header;
