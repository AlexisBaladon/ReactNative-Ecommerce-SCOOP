import React, { useContext } from 'react';
import Items from '../../components/items/items/items';
import { View, Alert } from 'react-native';
import styles from './cart.styles';
import { TEXT } from '../../constants';
import { CartItemContextComponents } from '../../context';
import { DtItem } from '../../interfaces';
import { Item } from '../../components';

const {
	CURRENCY_SYMBOL,
	CANCEL_TITLE,
	NO_ITEMS_MESSAGE,
	DELETE_ITEM_TITLE,
	DELETE_ITEM_DESCRIPTION,
	CONFIRM_DELETE_ITEM_TITLE
} = TEXT;

const CartScreen = () => {
	const { CartItemContext } = CartItemContextComponents;
	const { shownItems, deleteItem } = useContext(CartItemContext);

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

	return (
		<View style={styles.app}>
			<View style={styles.items}>
				<Items
					shownItems={shownItems}
					noItemsMessage={NO_ITEMS_MESSAGE}
					RenderItem={RenderItem} 
					numColumns={0}				
				/>
			</View>
		</View>
	);
};

export default CartScreen;
