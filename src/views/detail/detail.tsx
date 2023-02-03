import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { LikeableContainer, Navbar, CustomText } from '../../components';
import { ImageHandler } from '../../helpers';
import { NavbarParamList, RootStackParamList } from '../../navigation/types';
import { TEXT } from '../../constants';

const { CURRENCY_SYMBOL, ADD_TO_CART_BUTTON_MESSAGE } = TEXT;

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenNavigationProp> = ({route, navigation}) => {
	const { CartItemContext } = CartItemContextComponents;
	const { addItem, isItemInCart } = useContext(CartItemContext);

	const { getItemImage } = ImageHandler;
	const { item } = route.params;
	const image = getItemImage(item.imageURL);

	const itemInCart = isItemInCart(item.id);

	const handleAddItem = () => {
		if (itemInCart) return;
		addItem({...item, amount: 1}); //TODO: Add amount to item
	}

    return (<>
	<View style={styles.itemDetail}>
		<LikeableContainer item={item} >
			<Image source={image} style={styles.itemImage} />
		</LikeableContainer>
		<View style={styles.itemInfo}>
			<CustomText textType='bold' style={styles.title}>{item.title}</CustomText>
			<CustomText style={styles.description}>{item.description}</CustomText>
			<View style={styles.bottomInfo}>
				<View style={styles.bottomItem}>
					<CustomText style={styles.price} textType='bold'>{item.priceDollars}{CURRENCY_SYMBOL}</CustomText>
				</View>
				<TouchableHighlight style={[styles.addButton, styles.bottomItem, itemInCart? styles.disabledButton:null]} onPress={handleAddItem} disabled={itemInCart}>
					<CustomText style={styles.addButtonText} textType='bold'>{ADD_TO_CART_BUTTON_MESSAGE}</CustomText>
				</TouchableHighlight>
			</View>
		</View>
    </View>
        <Navbar 
			chosenIcon={0} 
			setChosenIcon={(index: number) => {
					const pages: (keyof NavbarParamList)[] = ['Store', 'Cart', 'Favourites'];
					const names = ['Tienda', 'Carrito', 'Favoritos'];
					return navigation.navigate(pages[index], {
						name: names[index],
					});
				}
			}
		/>
    </>)
}
import { COLORS } from '../../constants';
import { CartItemContextComponents } from '../../context';
const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
	itemDetail: {
		flex: 1,
		backgroundColor: 'white',
	},
	itemImage: {
		width: '100%', height: 300,
	},
	itemInfo: {
		flex: 1,
		flexDirection: 'column',
		padding: 20,
	},
	title: {
		fontSize: 40,
	},
	description: {
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
	}
	
});

export default DetailScreen;   