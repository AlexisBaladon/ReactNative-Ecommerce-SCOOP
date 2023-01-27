import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { itemHeight } from './store.styles';
import { TEXT } from '../../constants/index';
import StoreItems from '../../components/items/storeItems/storeItems';
import DtItem from '../../interfaces/item';

const {
	CURRENCY_SYMBOL,
	CANCEL_TITLE,
	NO_ITEMS_MESSAGE,
	DELETE_ITEM_TITLE,
	DELETE_ITEM_DESCRIPTION,
	CONFIRM_DELETE_ITEM_TITLE
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
];

const StoreScreen: React.FC = () => {
	const [items, setItems] = useState<DtItem[]>([]);

	useEffect(() => {
	  setItems(mockItems);
	}, [])
	

	return (
		<View style={{}}>
			<StoreItems
				items={items}
				itemHeight={itemHeight}
				currencySymbol={CURRENCY_SYMBOL}
				cancelTitle={CANCEL_TITLE}
				noItemsMessage={NO_ITEMS_MESSAGE}
				deleteItemTitle={DELETE_ITEM_TITLE}
				deleteItemDescription={DELETE_ITEM_DESCRIPTION}
				confirmDeleteTitle={CONFIRM_DELETE_ITEM_TITLE}
			/>
		</View>
	);
};

export default StoreScreen;
