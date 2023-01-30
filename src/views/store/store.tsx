import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TEXT } from '../../constants/index';
import { Buttons, Items, Search } from '../../components';
import styles from './store.styles';
import { DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';
import { items } from '../../data';

const {
	NO_ITEMS_MESSAGE,	
	SEARCH_PLACEHOLDER,
} = TEXT;

const StoreScreen: React.FC = () => {
	const [storeItems, setStoreItems] = useState<DtItem[]>([]);

	useEffect(() => {
		setStoreItems(items);
	}, [])

	const filterByText = (text: string) => {
		const filteredItems = items.filter((item) => {
			return item.title.toLowerCase().includes(text.toLowerCase());
		});
		setStoreItems(filteredItems);
	};

	type TButton = { title: string; onPress(): void, pressed: boolean };
	const buttons: Array<TButton> = [
		{ title: 'Todos', onPress: () => {}, pressed: true },
	];

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<StoreItem item={item} selling={true} />
			</View>
		);
	};

	return (<>
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
	</>);
};

export default StoreScreen;
