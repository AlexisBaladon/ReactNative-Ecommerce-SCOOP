import React, { useEffect, useMemo, useState } from 'react';
import { View, Pressable } from 'react-native';
import { TEXT } from '../../constants/index';
import { Buttons, Items, Search, Navbar } from '../../components';
import styles from './store.styles';
import { type DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';
import { items } from '../../data';
import {
	type DetailParamList,
	type NavbarParamList,
	type RootStackParamList,
} from '../../navigation/types';
import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const { NO_ITEMS_MESSAGE, SEARCH_PLACEHOLDER } = TEXT;

type StoreScreenNavigationProp = NativeStackScreenProps<
	RootStackParamList & DetailParamList,
	'Store'
>;

const StoreScreen: React.FC<StoreScreenNavigationProp> = ({ navigation, route }) => {
	const [storeItems, setStoreItems] = useState<DtItem[]>([]);
	const [searchText, setSearchText] = useState<string>('');

	const filterByText = (item: DtItem): boolean => {
		return (
			item.title.toLowerCase().includes(searchText.toLowerCase()) ||
			item.description.toLowerCase().includes(searchText.toLowerCase()) ||
			searchText === ''
		);
	};

	const shownItems = useMemo(() => {
		return storeItems.filter(filterByText);
	}, [searchText, storeItems]);

	useEffect(() => {
		setStoreItems(items);
	}, []);

	interface TButton {
		title: string;
		onPress: () => void;
		pressed: boolean;
	}
	const buttons: TButton[] = [{ title: 'Todos', onPress: () => {}, pressed: true }];

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<Pressable
				style={styles.item}
				onPress={() => {
					handlePress(item);
				}}
			>
				<StoreItem item={item} selling={true} />
			</Pressable>
		);
	};

	const pages: Array<keyof NavbarParamList> = ['Store', 'Cart', 'Favourites'];
	const names = ['Tienda', 'Carrito', 'Favoritos'];
	const setChosenIcon = (index: number): void => {
		navigation.navigate(pages[index], {
			name: names[index],
		});
	};
	const handlePress = (item: DtItem): void => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

	return (
		<>
			<View style={styles.search}>
				<Search placeHolder={SEARCH_PLACEHOLDER} onChangeText={setSearchText} />
			</View>
			<Buttons buttons={buttons} />
			<Items
				shownItems={shownItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={2}
			/>
			<Navbar chosenIcon={0} setChosenIcon={setChosenIcon} />
		</>
	);
};

export default StoreScreen;
