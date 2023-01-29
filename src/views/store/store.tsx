import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { TEXT } from '../../constants/index';
import { Buttons, Items, Options } from '../../components';
import styles from './store.styles';
import { DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';

const {
	NO_ITEMS_MESSAGE,
	DELETE_ALL_ITEMS_TITLE,
	
} = TEXT;

const mockItems: DtItem[] = [
	{
		id: "1",
		title: 'Item 1',
		description: 'This is',
		priceDollars: 100,
		imageURL: 'https://picsum.photos/200/300',
		amount: 1,
	},
	{
		id: "2",
		title: 'Item 2',
		description: 'This is a description',
		priceDollars: 200,
		imageURL: 'https://picsum.photos/200/300',
		amount: 1,
	},
	{
		id: "3",
		title: 'Item 3',
		description: 'This is a description',
		priceDollars: 300,
		imageURL: 'https://picsum.photos/200/300',
		amount: 1,
	},
	{
		id: "4",
		title: 'Item 4',
		description: 'This is a description',
		priceDollars: 300,
		imageURL: 'https://picsum.photos/200/300',
		amount: 1,
	},
	{
		id: "5",
		title: 'Item 5',
		description: 'This is a description',
		priceDollars: 300,
		imageURL: 'https://picsum.photos/200/300',
		amount: 1,
	},
];

const StoreScreen: React.FC = () => {
	const [items, setItems] = useState<DtItem[]>([]);

	useEffect(() => {
	  setItems(mockItems);
	}, [])

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
		<Buttons buttons={buttons} />
		<Items
			shownItems={items}
			noItemsMessage={NO_ITEMS_MESSAGE}
			RenderItem={RenderItem}
			numColumns={2}
		/>
	</>);
};

export default StoreScreen;
