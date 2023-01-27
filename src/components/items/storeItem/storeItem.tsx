import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { ImageHandler } from '../../../helpers/index';
import DtItem from '../../../interfaces/item';
import CustomText from '../../global/customText/customText';
import styles from './storeItem.styles';

interface IProps {
	item: DtItem;
	onPressButton: () => void;
	currencySymbol: string;
}

const StoreItem: React.FC<IProps> = ({
	item,
	onPressButton,
	currencySymbol
}) => {
	const { getItemImage } = ImageHandler;
	const imageSrc = getItemImage(item.imageURL);

	return (
		<View style={styles.item}>
			<Image style={styles.itemImage} source={imageSrc} />
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
					<TouchableHighlight style={styles.addToCartButton} onPress={onPressButton}>
						<CustomText style={styles.addToCartButtonText} textType='bold' numberOfLines={1} ellipsizeMode="tail">
							{`Agregar`}
						</CustomText>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
};

export default StoreItem;
