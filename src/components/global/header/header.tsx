import React from 'react';
import { View, Text } from 'react-native';
import styles from './header.styles';

interface IProps {
	title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;
