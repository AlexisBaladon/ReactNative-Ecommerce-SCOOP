import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useContext, useEffect, useMemo } from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { LikeableContainer, Navbar, CustomText, Counter } from '../../components';
import { ImageHandler } from '../../helpers';
import { type NavbarParamList, type RootStackParamList } from '../../navigation/types';
import { TEXT, COLORS } from '../../constants';
import { CartItemContextComponents } from '../../context';
import { useCounter } from '../../hooks';

const { CURRENCY_SYMBOL, ADD_TO_CART_BUTTON_MESSAGE } = TEXT;

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenNavigationProp> = ({ route, navigation }) => {
	const { item } = route.params;
	const { CartItemContext } = CartItemContextComponents;
	const { addItem, isItemInCart, updateCount, findItem, cartItems } = useContext(CartItemContext);
	const cartItem = useMemo(() => findItem(item.id), [cartItems]);
	const [count, countRef, addToCounter, resetCounter] = useCounter(
		1,
		cartItem !== undefined ? cartItem.amount : 1,
		99,
	);

	useEffect(() => {
		resetCounter(cartItem?.amount);
	}, [cartItem?.amount]);

	useEffect(() => {
		if (cartItem == null) return;
		updateCount(cartItem.id, countRef.current);
	}, [count]);

	const { getItemImage } = ImageHandler;
	const image = getItemImage(item.imageURL);
	const itemInCart = isItemInCart(item.id);

	const handleAddItem = (): void => {
		if (itemInCart) return;
		addItem({ ...item, amount: count }); // TODO: Add amount to item
	};

	return (
		<>
			<View style={styles.itemDetail}>
				<LikeableContainer item={item} width={50}>
					<Image source={image} style={styles.itemImage} />
				</LikeableContainer>
				<View style={styles.itemInfo}>
					<View style={styles.topInfoContainer}>
						<View style={styles.topInfo}>
							<CustomText textType="bold" style={styles.title}>
								{item.title}
							</CustomText>
							<CustomText style={styles.description}>{item.description}</CustomText>
						</View>
						<View style={styles.countContainer}>
							<Counter
								addCharacter={'+'}
								decCharacter={'-'}
								addToCounter={() => {
									addToCounter(1);
								}}
								count={count}
								decToCounter={() => {
									addToCounter(-1);
								}}
							/>
						</View>
					</View>
					<View style={styles.bottomInfo}>
						<View style={styles.bottomItem}>
							<CustomText style={styles.price} textType="bold">
								{item.priceDollars * (cartItem !== undefined ? cartItem.amount : 1)}
								{CURRENCY_SYMBOL}
							</CustomText>
						</View>
						<TouchableHighlight
							style={[
								styles.addButton,
								styles.bottomItem,
								itemInCart ? styles.disabledButton : null,
							]}
							onPress={handleAddItem}
							disabled={itemInCart}
						>
							<CustomText style={styles.addButtonText} textType="bold">
								{ADD_TO_CART_BUTTON_MESSAGE}
							</CustomText>
						</TouchableHighlight>
					</View>
				</View>
			</View>
			<Navbar
				chosenIcon={0}
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
const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
	itemDetail: {
		flex: 1,
		backgroundColor: 'white',
	},
	itemImage: {
		width: '100%',
		height: 300,
	},
	itemInfo: {
		flex: 1,
		flexDirection: 'column',
		padding: 20,
	},
	title: {
		fontSize: 30,
	},
	description: {
		fontSize: 15,
		color: NEUTRAL_COLOR,
	},
	bottomInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		position: 'relative',
		flexGrow: 1,
	},
	bottomItem: {
		marginBottom: 80,
	},
	price: {
		width: '100%',
		fontSize: 30,
		color: MAIN_COLOR,
	},
	addButton: {
		backgroundColor: MAIN_COLOR,
		padding: 20,
		borderRadius: 10,
	},
	disabledButton: {
		backgroundColor: NEUTRAL_COLOR,
	},
	addButtonText: {
		color: 'white',
	},
	topInfoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	topInfo: {
		width: '80%',
		display: 'flex',
		flexDirection: 'column',
	},
	countContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: 40,
	},
});

export default DetailScreen;
