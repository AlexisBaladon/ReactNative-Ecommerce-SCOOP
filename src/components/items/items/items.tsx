import React from 'react';
import { FlatList, View } from 'react-native';
import DtItem from '../../../interfaces/item';
import CustomText from '../../global/customText/customText';
import Item from '../item/item';
import createStyles from './item.styles';

interface IProps {
	shownItems: DtItem[];
	handleDeleteItem: (itemId: DtItem['id']) => void;
	itemHeight: number | string;
	noItemsMessage: string;
	deleteItemTitle: string;
	deleteItemDescription: string;
	cancelTitle: string;
	confirmDeleteTitle: string;
	currencySymbol: string;
}

const Items: React.FC<IProps> = ({
	shownItems,
	handleDeleteItem,
	itemHeight, 
	noItemsMessage, 
	currencySymbol,
}) => {
	const styles = createStyles(itemHeight);


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
