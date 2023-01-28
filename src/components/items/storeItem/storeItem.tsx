import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { ImageHandler } from '../../../helpers/index';
import DtItem from '../../../interfaces/item';
import LikeableContainer from '../../global/buttons/likeable/likeableContainer';
import CustomText from '../../global/customText/customText';
import styles from './storeItem.styles';

interface IProps {
	item: DtItem;
	onPressButton: () => void;
	isAddedToCart: boolean;
	currencySymbol: string;
	addToCartMessage: string;
}

const StoreItem: React.FC<IProps> = ({
	item,
	onPressButton,
	isAddedToCart,
	currencySymbol,
	addToCartMessage,
}) => {
	const { getItemImage } = ImageHandler;
	const imageSrc = getItemImage(item.imageURL);
	const addToCartButtonStyle = isAddedToCart ? styles.addToCartButtonDisabled : {};

	return (
		<View style={styles.item}>
			<LikeableContainer item={item}>
				<Image style={styles.itemImage} source={imageSrc} />
			</LikeableContainer>
			<View style={styles.textContainer}>
				<CustomText style={styles.itemTitle} textType='bold' numberOfLines={2} ellipsizeMode="tail">
					{item.title}
				</CustomText>
				<CustomText style={styles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
					{item.description}
				</CustomText>
				<View style={styles.priceContainer}>
					<CustomText style={styles.itemPrice} textType='bold' numberOfLines={1} ellipsizeMode="tail">
						{`${item.priceDollars}${currencySymbol}`}
					</CustomText>
					<TouchableHighlight style={[styles.addToCartButton, addToCartButtonStyle]} onPress={onPressButton}>
						<CustomText style={styles.addToCartButtonText} textType='bold' numberOfLines={1} ellipsizeMode="tail">
							{addToCartMessage}
						</CustomText>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
};

export default StoreItem;
