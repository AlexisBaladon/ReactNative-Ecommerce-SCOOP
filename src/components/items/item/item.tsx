import React, { useEffect, useRef } from 'react';
import { View, Image } from 'react-native';
import { ImageHandler } from '../../../helpers';
import { useCounter } from '../../../hooks';
import DtItem from '../../../interfaces/dtItem';
import CloseButton from '../../global/buttons/closeButton/closeButton';
import Counter from '../../global/buttons/counter/counter';
import CustomText from '../../global/customText/customText';
import LikeableContainer from '../../global/buttons/likeable/likeableContainer';
import { styles, buttonWidth } from './item.styles';

interface IProps {
	item: DtItem;
	amount: number;
	deleteItem(itemId: DtItem['id']): void;
	updateItemCounter(itemId: DtItem['id'], count: number): void;
	currencySymbol: string;
	minCount?: number;
	maxCount?: number;
}

const Item: React.FC<IProps> = ({
	item,
	amount,
	deleteItem,
	updateItemCounter,
	currencySymbol,
	minCount = 1,
	maxCount = 99,
}) => {
	const { getItemImage } = ImageHandler;
	const [count, addToCounter, decToCounter] = useCounter(minCount, amount, maxCount);
	const imageSrc = getItemImage(item.imageURL);
	const countRef = useRef(count);

	useEffect(() => {
	    return () => {
		    updateItemCounter(item.id, countRef.current);
	    }
	}, [])
	
	const handleAddToCounter = () => {
		addToCounter(1);
		countRef.current += 1;
	};

	const handleDecToCounter = () => {
		decToCounter(1);
		countRef.current -= 1;
	};

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
						addToCounter={handleAddToCounter}
						count={count}
						decToCounter={handleDecToCounter}
					/>
				</View>
			</View>
		</View>
	);
};

export default Item;
