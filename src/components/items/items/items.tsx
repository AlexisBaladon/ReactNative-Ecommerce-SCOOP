import React, { useContext } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import ItemContextComponents from '../../../context/itemContext';
import DtItem from '../../../interfaces/item';
import Item from '../item/item';
import createStyles from './item.styles';

interface IProps {
	itemHeight: number | string;
	noItemsMessage: string;
	deleteItemTitle: string;
	deleteItemDescription: string;
	cancelTitle: string;
	confirmDeleteTitle: string;
	currencySymbol: string;
}

const Items: React.FC<IProps> = ({
	itemHeight, 
	noItemsMessage, 
	currencySymbol,
	deleteItemTitle,
	deleteItemDescription,
	cancelTitle,
	confirmDeleteTitle,
}) => {
	const { ItemContext } = ItemContextComponents;
	const { shownItems, deleteItem } = useContext(ItemContext);
	const styles = createStyles(itemHeight);

	const handleDeleteItem = (id: string) => {
		Alert.alert(
			deleteItemTitle,
			deleteItemDescription, [
				{text: cancelTitle, style: 'cancel'},
				{text: confirmDeleteTitle, onPress: () => deleteItem(id)},
			]
		)
	}

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<Item item={item} deleteItem={handleDeleteItem} currencySymbol={currencySymbol} />
			</View>
		);
	};

	return (
		<>
			{!shownItems.length && (
				<View style={styles.emptyListTextContainer}>
					<Text style={styles.emptyListText}>{noItemsMessage}</Text>
				</View>
			)}
			{shownItems.length > 0 && (
				<FlatList
					contentContainerStyle={styles.items}
					renderItem={RenderItem}
					data={shownItems}
					keyExtractor={(item: DtItem) => item.id}
				/>
			)}
		</>
	);
};

export default Items;
