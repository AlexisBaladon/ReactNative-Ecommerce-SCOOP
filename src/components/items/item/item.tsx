import React from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import { ImageHandler } from '../../../helpers/index';
import useCounter from '../../../hooks/useCounter';
import DtItem from '../../../interfaces/item';
import CloseButton from '../../global/buttons/close_button/closeButton';
import Counter from '../../global/buttons/counter/counter';
import { styles, buttonWidth } from './item.styles';

interface IProps {
	item: DtItem;
	deleteItem(itemId: DtItem['id']): void;
	currencySymbol: string;
	minCount?: number;
	maxCount?: number;
}

const Item: React.FC<IProps> = ({
	item,
	deleteItem,
	currencySymbol,
	minCount = 1,
	maxCount = 99,
}) => {
	const { getItemImage } = ImageHandler;
	const [count, addToCounter, decToCounter] = useCounter(minCount, item.amount, maxCount);
	const imageSrc = getItemImage(item.imageURL);

	return (
		<View style={styles.item}>
			<View style={styles.imageContainer}>
				<Image style={styles.itemImage} source={imageSrc} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.itemTitle} numberOfLines={2} ellipsizeMode="tail">
					{item.title}
				</Text>
				<Text style={styles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
					{item.description}
				</Text>
				<Text style={styles.itemPrice} numberOfLines={1} ellipsizeMode="tail">{`${
					item.priceDollars * count
				} ${currencySymbol}`}</Text>
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
						addToCounter={addToCounter}
						count={count}
						decToCounter={decToCounter}
					/>
				</View>
			</View>
		</View>
	);
};

export default Item;
