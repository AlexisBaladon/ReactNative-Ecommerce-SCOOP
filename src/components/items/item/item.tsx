import React from 'react';
import { View, Image } from 'react-native';
import { ImageHandler } from '../../../helpers';
import type DtItem from '../../../interfaces/dtItem';
import CloseButton from '../../global/buttons/closeButton/closeButton';
import Counter from '../../global/buttons/counter/counter';
import CustomText from '../../global/customText/customText';
import LikeableContainer from '../../global/buttons/likeable/likeableContainer';
import { styles, buttonWidth } from './item.styles';
import { type DtItemCart } from '../../../interfaces';

interface IProps {
	item: DtItemCart;
	deleteItem: (itemId: DtItem['id']) => void;
	updateItemCounter: (itemId: DtItem['id'], count: number) => void;
	currencySymbol: string;
	minCount?: number;
	maxCount?: number;
}

const Item: React.FC<IProps> = ({
	item,
	deleteItem,
	updateItemCounter,
	currencySymbol,
	minCount = 1,
	maxCount = 99,
}) => {
	const count = item.amount;
	const { getItemImage } = ImageHandler;
	const imageSrc = getItemImage(item.imageURL);

	return (
		<View style={styles.item}>
			<View style={styles.imageContainer}>
				<LikeableContainer item={item}>
					<Image style={styles.itemImage} source={imageSrc} />
				</LikeableContainer>
			</View>
			<View style={styles.textContainer}>
				<CustomText
					style={styles.itemTitle}
					size="medium"
					textType="bold"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{item.title}
				</CustomText>
				<CustomText
					size="small"
					style={styles.itemDescription}
					numberOfLines={2}
					ellipsizeMode="tail"
				>
					{item.description}
				</CustomText>
				<CustomText
					style={styles.itemPrice}
					textType="bold"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{`${item.priceDollars * count} ${currencySymbol}`}
				</CustomText>
			</View>
			<View style={styles.buttonContainer}>
				<View>
					<CloseButton
						onPress={() => {
							deleteItem(item.id);
						}}
						height={buttonWidth}
						width={buttonWidth}
					/>
				</View>
				<View style={styles.counterButtons}>
					<Counter
						addCharacter={'+'}
						decCharacter={'-'}
						addToCounter={() => {
							updateItemCounter(item.id, count + 1);
						}}
						count={count}
						decToCounter={() => {
							updateItemCounter(item.id, count - 1);
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default Item;
