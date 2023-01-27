import React from 'react';
import {  FlatList, View } from 'react-native';
import DtItem from '../../../interfaces/item';
import CustomText from '../../global/customText/customText';
import StoreItem from '../storeItem/storeItem';
import createStyles from './storeItems.styles';

interface IProps {
	items: DtItem[];
	itemHeight: number;
	noItemsMessage: string;
	deleteItemTitle: string;
	deleteItemDescription: string;
	cancelTitle: string;
	confirmDeleteTitle: string;
	currencySymbol: string;
}

const StoreItems: React.FC<IProps> = ({
	items,
	itemHeight, 
	noItemsMessage, 
	currencySymbol,
}) => {
	const styles = createStyles(itemHeight);

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<StoreItem item={item} currencySymbol={currencySymbol}/>
			</View>
		);
	};

	return (
		<>
			{!items.length && (
				<View style={styles.emptyListTextContainer}>
					<CustomText style={styles.emptyListText}>{noItemsMessage}</CustomText>
				</View>
			)}
			{!!items.length && (
				<View style={styles.itemsContainer}>
					<FlatList
						contentContainerStyle={styles.items}
						renderItem={RenderItem}
						data={items}
						keyExtractor={(item: DtItem) => item.id}
						numColumns={2}
					/>
				</View>
			)}
		</>
	);
};

export default StoreItems;
