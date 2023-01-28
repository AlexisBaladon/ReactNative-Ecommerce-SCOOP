import React, { useContext } from 'react';
import {  FlatList, TouchableHighlight, View } from 'react-native';
import DtItem from '../../../interfaces/item';
import CustomText from '../../global/customText/customText';
import StoreItem from '../storeItem/storeItem';
import createStyles from './storeItems.styles';
import { CartItemContextComponents } from '../../../context';

interface IProps {
	items: DtItem[];
	itemHeight: number;
	noItemsMessage: string;
	deleteItemTitle: string;
	deleteItemDescription: string;
	cancelTitle: string;
	confirmDeleteTitle: string;
	currencySymbol: string;
	addToCartMessage: string;
}

const StoreItems: React.FC<IProps> = ({
	items,
	itemHeight, 
	noItemsMessage, 
	currencySymbol,
	addToCartMessage,
}) => {
	const { CartItemContext } = CartItemContextComponents;
	const { addItem, isItemInCart } = useContext(CartItemContext);
	const styles = createStyles(itemHeight);

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<StoreItem 
					item={item} 
					currencySymbol={currencySymbol} 
					onPressButton={() => addItem(item)}
					isAddedToCart={isItemInCart(item.id)}
					addToCartMessage={addToCartMessage}
				/>
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
