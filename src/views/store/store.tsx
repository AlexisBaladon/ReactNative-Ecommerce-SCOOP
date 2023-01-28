import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { TEXT } from '../../constants/index';
import { Items } from '../../components';
import styles from './store.styles';
import { DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';
import { CartItemContextComponents } from '../../context';

const {
	CURRENCY_SYMBOL,
	NO_ITEMS_MESSAGE,
	ADD_BUTTON_MESSAGE,
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
	const { CartItemContext } = CartItemContextComponents;
	const { addItem, isItemInCart } = useContext(CartItemContext);

	useEffect(() => {
	  setItems(mockItems);
	}, [])

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<StoreItem 
					item={item} 
					currencySymbol={CURRENCY_SYMBOL} 
					onPressButton={() => addItem(item)}
					isAddedToCart={isItemInCart(item.id)}
					addToCartMessage={ADD_BUTTON_MESSAGE}
				/>
			</View>
		);
	};

	return (
		<View style={{}}>
			<Items
				shownItems={items}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={2}
			/>
		</View>
	);
};

export default StoreScreen;
