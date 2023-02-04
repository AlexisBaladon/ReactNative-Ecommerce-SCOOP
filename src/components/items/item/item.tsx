import React, { useCallback, useEffect } from 'react';
import { View, Image } from 'react-native';
import { ImageHandler } from '../../../helpers';
import { useCounter } from '../../../hooks';
import DtItem from '../../../interfaces/dtItem';
import CloseButton from '../../global/buttons/closeButton/closeButton';
import Counter from '../../global/buttons/counter/counter';
import CustomText from '../../global/customText/customText';
import LikeableContainer from '../../global/buttons/likeable/likeableContainer';
import { styles, buttonWidth } from './item.styles';
import { DtItemCart } from '../../../interfaces';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

interface IProps {
	item: DtItemCart;
	deleteItem(itemId: DtItem['id']): void;
	updateItemCounter(itemId: DtItem['id'], count: number): void;
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
	const { getItemImage } = ImageHandler;
	const [count, countRef, addToCounter, resetCounter] = useCounter(minCount, item.amount, maxCount);
	const imageSrc = getItemImage(item.imageURL);

	useEffect(() => {
		resetCounter(item.amount);
	}, [item.amount]);

	useEffect(() => {
		updateItemCounter(item.id, countRef.current);
	}, [count]);

	return (
		<View style={styles.item}>
			<View style={styles.imageContainer}>
				<LikeableContainer item={item}>
					<Image style={styles.itemImage} source={imageSrc} />
				</LikeableContainer>
			</View>
			<View style={styles.textContainer}>
				<CustomText style={styles.itemTitle} textType='bold' numberOfLines={1} ellipsizeMode="tail">
					{item.title}
				</CustomText>
				<CustomText style={styles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
					{item.description}
				</CustomText>
				<CustomText style={styles.itemPrice} textType='bold' numberOfLines={1} ellipsizeMode="tail">
					{`${item.priceDollars * count} ${currencySymbol}`}
				</CustomText>
			</View>
			<View style={styles.buttonContainer}>
				<View>
					<CloseButton
						onPress={() => deleteItem(item.id)}
						height={buttonWidth}
						width={buttonWidth}
					/>
				</View>
				<View style={styles.counterButtons}>
					<Counter
						addCharacter={'+'}
						decCharacter={'-'}
						addToCounter={() => addToCounter(1)}
						count={count}
						decToCounter={() => addToCounter(-1)}
					/>
				</View>
			</View>
		</View>
	);
};

export default Item;
