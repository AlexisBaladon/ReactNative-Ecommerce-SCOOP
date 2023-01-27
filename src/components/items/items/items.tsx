import React, { useContext } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { CartItemContextComponents } from '../../../context';
import DtItem from '../../../interfaces/item';
import CustomText from '../../global/customText/customText';
import Item from '../item/item';
import StoreItem from '../storeItem/storeItem';
import createStyles from './item.styles';

interface IProps {
	items: DtItem[];
	itemHeight: number | string;
	noItemsMessage: string;
	deleteItemTitle: string;
	deleteItemDescription: string;
	cancelTitle: string;
	confirmDeleteTitle: string;
	currencySymbol: string;
}

const Items: React.FC<IProps> = ({
	items,
	itemHeight, 
	noItemsMessage, 
	currencySymbol,
	deleteItemTitle,
	deleteItemDescription,
	cancelTitle,
	confirmDeleteTitle,
}) => {
	const { CartItemContext } = CartItemContextComponents;
	const { shownItems, deleteItem } = useContext(CartItemContext);
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
					<CustomText style={styles.emptyListText}>{noItemsMessage}</CustomText>
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
