import React from 'react';
import { View, Image } from 'react-native';
import { ImageHandler } from '../../../helpers/index';
import DtItem from '../../../interfaces/dtItem';
import LikeableContainer from '../../global/buttons/likeable/likeableContainer';
import CustomText from '../../global/customText/customText';
import styles from './storeItem.styles';
import ItemStoreInfo from './itemStoreInfo';

interface IProps {
	item: DtItem,
	selling: boolean,
}

const StoreItem: React.FC<IProps> = ({item, selling}) => {
	const { getItemImage } = ImageHandler;
	const imageSrc = getItemImage(item.imageURL);
	const AddToCart: React.FC = () => {
		return selling ? <ItemStoreInfo item={item} /> : null;
	};

	return (
		<View style={styles.item}>
			<LikeableContainer item={item}>
				<Image style={styles.itemImage} source={imageSrc} />
			</LikeableContainer>
			<View style={styles.textContainer}>
				<CustomText style={styles.itemTitle} textType='bold' numberOfLines={1} ellipsizeMode="tail">
					{item.title}
				</CustomText>
				<CustomText style={styles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
					{item.description}
				</CustomText>
				< AddToCart />
			</View>
		</View>
	);
};

export default StoreItem;
