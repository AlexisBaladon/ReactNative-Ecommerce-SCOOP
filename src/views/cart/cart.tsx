import React, { useEffect, useMemo, useState } from 'react';
import Items from '../../components/items/items/items';
import { View, Alert, Pressable } from 'react-native';
import styles from './cart.styles';
import { TEXT } from '../../constants';
import { type DtItem, type DtItemCart } from '../../interfaces';
import { Buttons, Item, Search } from '../../components';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type CartParamList } from '../../navigation/types/cart.types';
import { updateCounterCart, removeItemCart, removeAllItemsCart } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { filterItemFunction } from '../../helpers/itemFilter';
import type { ReduxStoreState } from '../../store';

const {
	CURRENCY_SYMBOL,
	CANCEL_TITLE,
	NO_ITEMS_MESSAGE,
	DELETE_ITEM_TITLE,
	DELETE_ALL_ITEMS_TITLE,
	DELETE_ALL_ITEMS_DESCRIPTION,
	DELETE_ITEM_DESCRIPTION,
	CONFIRM_DELETE_ITEM_TITLE,
	SEARCH_PLACEHOLDER,
} = TEXT;

type CartScreenNavigationProp = NativeStackScreenProps<CartParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenNavigationProp> = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');
	const items = useSelector((state: ReduxStoreState) => state.cart.items);
	const shownItems = useMemo(() => (items.filter(filterItemFunction(query))), [query, items])

	useEffect(() => {
		return () => {
			setQuery('');
		};
	}, []);

	const handlePress = (item: DtItem): void => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

	const handleUpdateCount = (id: DtItem['id'], count: number): void => {
		dispatch(updateCounterCart(id, count));
	};

	
	const handleDeleteItem = (id: DtItem['id']): void => {
		Alert.alert(DELETE_ITEM_TITLE, DELETE_ITEM_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{
				text: CONFIRM_DELETE_ITEM_TITLE,
				onPress: () => {
					dispatch(removeItemCart(id));
				},
			},
		]);
	};
	
	const handleDeleteAllItems = (): void => {
		Alert.alert(DELETE_ALL_ITEMS_TITLE, DELETE_ALL_ITEMS_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{ text: DELETE_ALL_ITEMS_TITLE, onPress: () => dispatch(removeAllItemsCart()) },
		]);
	};

	interface TButton {
		title: string;
		onPress: () => void;
		pressed: boolean;
	}

	const buttons: TButton[] = [
		{ title: DELETE_ALL_ITEMS_TITLE, onPress: handleDeleteAllItems, pressed: false },
	];
	
	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<Pressable
				style={styles.item}
				onPress={() => {
					handlePress(item);
				}}
			>
				<Item
					item={item as DtItemCart}
					deleteItem={handleDeleteItem}
					currencySymbol={CURRENCY_SYMBOL}
					updateItemCounter={handleUpdateCount}
				/>
			</Pressable>
		);
	};


	return (
		<>
			<View style={styles.search}>
				<Search onChangeText={setQuery} placeHolder={SEARCH_PLACEHOLDER} />
			</View>
			<Buttons buttons={buttons} />
			<Items
				shownItems={shownItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={1}
			/>
		</>
	);
};

export default CartScreen;
