import React, { useEffect } from 'react';
import Items from '../../components/items/items/items';
import { View, Alert, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';
import createStyles from './cart.styles';
import { TEXT } from '../../constants';
import { type DtItem, type DtItemCart } from '../../interfaces';
import { CustomText, Item, OrderDescription } from '../../components';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type CartParamList } from '../../navigation/types/cart.types';
import {
	updateCounterCart,
	removeItemCart,
	removeAllItemsCart,
} from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import type { ReduxStoreState } from '../../store';
import useFilter from '../../hooks/useFilter';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const {
	CURRENCY_SYMBOL,
	CANCEL_TITLE,
	NO_ITEMS_MESSAGE,
	DELETE_ITEM_TITLE,
	DELETE_ALL_ITEMS_TITLE,
	DELETE_ALL_ITEMS_DESCRIPTION,
	DELETE_ITEM_DESCRIPTION,
	CONFIRM_DELETE_ITEM_TITLE,
	CONFIRM_ORDER_TITLE,
} = TEXT;

const { height } = Dimensions.get('window');

type CartScreenNavigationProp = NativeStackScreenProps<CartParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenNavigationProp> = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const items = useSelector((state: ReduxStoreState) => state.cart.items);
	const totalItems = useSelector((state: ReduxStoreState) => state.cart.totalItems);
	const subtotal = useSelector((state: ReduxStoreState) => state.cart.subtotal);
	const carriage = useSelector((state: ReduxStoreState) => state.cart.carriage);
	const total = useSelector((state: ReduxStoreState) => state.cart.total);
	const userId = useSelector((state: ReduxStoreState) => state.auth.userId);
	const isLoading = useSelector((state: ReduxStoreState) => state.cart.loading);
	const error = useSelector((state: ReduxStoreState) => state.cart.error);
	const discountPercentage = useSelector(
		(state: ReduxStoreState) => state.cart.discountPercentage,
	);
	const { filterText, filteredItems } = useFilter(items);
	const tabBarHeight = useBottomTabBarHeight();
	const styles = createStyles(tabBarHeight);

	useEffect(() => {
		return () => {
			filterText('');
		};
	}, []);

	useEffect(() => {
		if (error !== null) {
			Alert.alert('Error', error.message, [{ text: 'OK' }]);
		}
	}, [error]);

	const handlePressItem = (item: DtItem): void => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

	const handleCheckout = (): void => {
		navigation.navigate('Checkout', {
			name: 'Confirmar compra',
		});
	};

	const handleUpdateCount = (itemId: DtItem['id'], count: number): void => {
		dispatch(updateCounterCart(userId, itemId, count) as any);
	};

	const handleDeleteItem = (id: DtItem['id']): void => {
		Alert.alert(DELETE_ITEM_TITLE, DELETE_ITEM_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{
				text: CONFIRM_DELETE_ITEM_TITLE,
				onPress: () => {
					dispatch(removeItemCart(userId, id) as any);
				},
			},
		]);
	};

	const handleDeleteAllItems = (): void => {
		Alert.alert(DELETE_ALL_ITEMS_TITLE, DELETE_ALL_ITEMS_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{
				text: DELETE_ALL_ITEMS_TITLE,
				onPress: () => dispatch(removeAllItemsCart(userId) as any),
			},
		]);
	};

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<Pressable
				style={styles.item}
				onPress={() => {
					handlePressItem(item);
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
			<View style={[styles.orderDescription]}>
				<OrderDescription
					totalItems={totalItems}
					subtotal={subtotal}
					total={total}
					discountPercentage={discountPercentage}
					carriage={carriage}
					currencySymbol={CURRENCY_SYMBOL}
				/>
			</View>
			<Items
				shownItems={filteredItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={1}
				heightPercentage={height * 0.07}
				paddingBottom={35}
				paddingBottomEmpty={200}
				isLoading={isLoading}
			/>
			<View style={styles.buttons}>
				<TouchableOpacity
					onPress={handleDeleteAllItems}
					style={[styles.deleteButton, styles.button]}
				>
					<Image source={require('./delete.png')} style={styles.deleteIcon} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleCheckout}
					style={[styles.checkoutButton, styles.button]}
				>
					<CustomText textType="bold" style={styles.buttonText}>
						{CONFIRM_ORDER_TITLE}
					</CustomText>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default CartScreen;
