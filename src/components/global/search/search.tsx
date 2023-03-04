import React, { useRef } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './search.styles';

interface IProps {
	placeHolder: string;
	onChangeText: (text: string) => void;
	defaultValue?: string;
}

const Search: React.FC<IProps> = ({ placeHolder, onChangeText, defaultValue = '' }) => {
	const searchInputRef = useRef<TextInput>(null);

	return (
		<>
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
					<TouchableOpacity onPress={() => searchInputRef.current?.focus()}>
						<Image style={styles.filterImage} source={require('./filter.png')} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default Search;
