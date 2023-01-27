import React, { useContext } from 'react';
import Items from '../../components/items/items/items';
import { View, Alert } from 'react-native';
import { styles, itemHeight } from './favourites.styles';
import { TEXT } from '../../constants';
import { FavouritesContextComponents } from '../../context';

const {
	CURRENCY_SYMBOL,
	CANCEL_TITLE,
	NO_ITEMS_MESSAGE,
	DELETE_ITEM_TITLE,
	DELETE_ITEM_DESCRIPTION,
	CONFIRM_DELETE_ITEM_TITLE
} = TEXT;

const FavouritesScreen: React.FC = () => {
	const { FavouriteItemsContext } = FavouritesContextComponents;
	const { shownItems, deleteItem } = useContext(FavouriteItemsContext);

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
		<View style={styles.items}>
			<Items
				shownItems={shownItems}
				handleDeleteItem={handleDeleteItem}
				itemHeight={itemHeight}
				noItemsMessage={NO_ITEMS_MESSAGE}
				currencySymbol={CURRENCY_SYMBOL}
				deleteItemTitle={DELETE_ITEM_TITLE}
				deleteItemDescription={DELETE_ITEM_DESCRIPTION}
				cancelTitle={CANCEL_TITLE}
				confirmDeleteTitle={CONFIRM_DELETE_ITEM_TITLE}
 			/>
		</View>
	);
};

export default FavouritesScreen;
