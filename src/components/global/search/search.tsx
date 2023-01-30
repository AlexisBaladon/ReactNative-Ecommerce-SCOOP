import React, { useRef } from 'react';
import { View, TextInput, Image, TouchableHighlight } from 'react-native';
import styles from './search.styles';

interface IProps {
	placeHolder: string;
	onChangeText: (text: string) => void;
	defaultValue?: string;
}

const Search: React.FC<IProps> = ({ placeHolder, onChangeText, defaultValue = '' }) => {
	const searchInputRef = useRef<TextInput>(null);

	return (
		<View style={styles.search}>
			<View style={styles.searchInputContainer}>
				<Image style={styles.magnifyingGlass} source={require('./search.png')} />
				<TextInput
					style={styles.searchInput}
					placeholder={placeHolder}
					defaultValue={defaultValue}
					onChangeText={onChangeText}
					ref={searchInputRef}
				/>
			</View>
			<View style={styles.filterContainer}>
				<TouchableHighlight onPress={() => searchInputRef.current?.focus()}>
					<Image style={styles.filterImage} source={require('./filter.png')} />
				</TouchableHighlight>
			</View>
		</View>
	);
};

export default Search;
