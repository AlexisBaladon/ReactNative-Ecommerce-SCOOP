import React, { useContext } from 'react';
import Items from '../../components/items/items/items';
import { View, Alert } from 'react-native';
import styles from './cart.styles';
import { TEXT } from '../../constants';
import { CartItemContextComponents } from '../../context';
import { DtItem } from '../../interfaces';
import { Buttons, Item } from '../../components';

const {
	CURRENCY_SYMBOL,
	CANCEL_TITLE,
	NO_ITEMS_MESSAGE,
	DELETE_ITEM_TITLE,
	DELETE_ALL_ITEMS_TITLE,
	DELETE_ALL_ITEMS_DESCRIPTION,
	DELETE_ITEM_DESCRIPTION,
	CONFIRM_DELETE_ITEM_TITLE
} = TEXT;

const CartScreen = () => {
	const { CartItemContext } = CartItemContextComponents;
	const { shownItems, deleteItem, deleteAllItems } = useContext(CartItemContext);

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<Item item={item} deleteItem={handleDeleteItem} currencySymbol={CURRENCY_SYMBOL} />
			</View>
		);
	};

	const handleDeleteItem = (id: string) => {
		Alert.alert(
			DELETE_ITEM_TITLE,
			DELETE_ITEM_DESCRIPTION, [
				{text: CANCEL_TITLE, style: 'cancel'},
				{text: CONFIRM_DELETE_ITEM_TITLE, onPress: () => deleteItem(id)},
			]
		)
	}

	const onHandleDeleteAllItems = () => {
		Alert.alert(
			DELETE_ALL_ITEMS_TITLE,
			DELETE_ALL_ITEMS_DESCRIPTION, [
				{text: DELETE_ALL_ITEMS_TITLE, onPress: deleteAllItems},
			]
		)
	}

	type TButton = { title: string; onPress(): void, pressed: boolean };
	const buttons: Array<TButton> = [
		{ title: DELETE_ALL_ITEMS_TITLE, onPress: onHandleDeleteAllItems, pressed: false },
	];


	return (<>
		<Buttons buttons={buttons} />
		<Items
			shownItems={shownItems}
			noItemsMessage={NO_ITEMS_MESSAGE}
			RenderItem={RenderItem} 
			numColumns={1}				
		/>
	</>);
};

export default CartScreen;
