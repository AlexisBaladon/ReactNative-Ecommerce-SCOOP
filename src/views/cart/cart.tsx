import React, { useContext, useEffect } from 'react';
import Items from '../../components/items/items/items';
import { View, Alert, Pressable } from 'react-native';
import styles from './cart.styles';
import { TEXT } from '../../constants';
import { CartItemContextComponents } from '../../context';
import { type DtItem, type DtItemCart } from '../../interfaces';
import { Buttons, Item, Navbar, Search } from '../../components';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type NavbarParamList, type RootStackParamList } from '../../navigation/types';

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

type CartScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenNavigationProp> = ({ navigation, route }) => {
	const { CartItemContext } = CartItemContextComponents;
	const { shownItems, deleteItem, deleteAllItems, filterByText, updateCount } =
		useContext(CartItemContext);

	useEffect(() => {
		return () => {
			filterByText('');
		};
	}, []);

	const handlePress = (item: DtItem): void => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

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
					updateItemCounter={updateCount}
				/>
			</Pressable>
		);
	};

	const handleDeleteItem = (id: DtItem['id']): void => {
		Alert.alert(DELETE_ITEM_TITLE, DELETE_ITEM_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{
				text: CONFIRM_DELETE_ITEM_TITLE,
				onPress: () => {
					deleteItem(id);
				},
			},
		]);
	};

	const onHandleDeleteAllItems = (): void => {
		Alert.alert(DELETE_ALL_ITEMS_TITLE, DELETE_ALL_ITEMS_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{ text: DELETE_ALL_ITEMS_TITLE, onPress: deleteAllItems },
		]);
	};

	interface TButton {
		title: string;
		onPress: () => void;
		pressed: boolean;
	}
	const buttons: TButton[] = [
		{ title: DELETE_ALL_ITEMS_TITLE, onPress: onHandleDeleteAllItems, pressed: false },
	];

	return (
		<>
			<View style={styles.search}>
				<Search onChangeText={filterByText} placeHolder={SEARCH_PLACEHOLDER} />
			</View>
			<Buttons buttons={buttons} />
			<Items
				shownItems={shownItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={1}
			/>
			<Navbar
				chosenIcon={1}
				setChosenIcon={(index: number) => {
					const pages: Array<keyof NavbarParamList> = ['Store', 'Cart', 'Favourites'];
					const names = ['Tienda', 'Carrito', 'Favoritos'];
					navigation.navigate(pages[index], {
						name: names[index],
					});
				}}
			/>
		</>
	);
};

export default CartScreen;
