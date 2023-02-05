import React, { useEffect, useState } from 'react';
import { View, Button, TouchableWithoutFeedback, Pressable } from 'react-native';
import { TEXT } from '../../constants/index';
import { Buttons, Items, Search } from '../../components';
import styles from './store.styles';
import { DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';
import { items } from '../../data';
import { DetailParamList, NavbarParamList, RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Navbar } from '../../components';

const { NO_ITEMS_MESSAGE, SEARCH_PLACEHOLDER } = TEXT;

type StoreScreenNavigationProp = NativeStackScreenProps<
	RootStackParamList & DetailParamList,
	'Store'
>;

const StoreScreen: React.FC<StoreScreenNavigationProp> = ({ navigation, route }) => {
	const [storeItems, setStoreItems] = useState<DtItem[]>([]);

	useEffect(() => {
		setStoreItems(items);
	}, []);

	const filterByText = (text: string) => {
		const filteredItems = items.filter((item) => {
			return item.title.toLowerCase().includes(text.toLowerCase());
		});
		setStoreItems(filteredItems);
	};

	type TButton = { title: string; onPress(): void; pressed: boolean };
	const buttons: Array<TButton> = [{ title: 'Todos', onPress: () => {}, pressed: true }];

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<Pressable style={styles.item} onPress={() => handlePress(item)}>
				<StoreItem item={item} selling={true} />
			</Pressable>
		);
	};

	const pages: (keyof NavbarParamList)[] = ['Store', 'Cart', 'Favourites'];
	const names = ['Tienda', 'Carrito', 'Favoritos'];
	const setChosenIcon = (index: number) => {
		return navigation.navigate(pages[index], {
			name: names[index],
		});
	};
	const handlePress = (item: DtItem) => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

	return (
		<>
			<View style={styles.search}>
				<Search placeHolder={SEARCH_PLACEHOLDER} onChangeText={filterByText} />
			</View>
			<Buttons buttons={buttons} />
			<Items
				shownItems={storeItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={2}
			/>
			<Navbar chosenIcon={0} setChosenIcon={setChosenIcon} />
		</>
	);
};

export default StoreScreen;
