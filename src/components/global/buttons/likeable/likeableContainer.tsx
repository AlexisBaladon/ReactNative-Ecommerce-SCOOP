import React from 'react';
import { Image, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { type DtItem } from '../../../../interfaces';
import createStyles from './likeableContainer.styles';
import { type ReduxStoreState } from '../../../../store';
import { addItemFavourites, removeItemFavourites } from '../../../../store/actions';

interface IProps {
	children: React.ReactNode;
	item: DtItem;
	width?: number;
}

const LikeableContainer: React.FC<IProps> = ({ children, item, width = 30 }) => {
	const dispatch = useDispatch();
	const itemExists: boolean = useSelector(
		(state: ReduxStoreState) => state.favourites.items,
	).some((it: DtItem) => it.id === item.id);

	const handleLike = (item: DtItem): void => {
		dispatch(addItemFavourites(item.id));
	};

	const handleRemoveLike = (item: DtItem): void => {
		dispatch(removeItemFavourites(item.id));
	};

	const handlePressHeart = (): void => {
		itemExists ? handleRemoveLike(item) : handleLike(item);
	};

	const styles = createStyles(width);
	const heartStyle = itemExists ? styles.likedHeart : StyleSheet.create({});

	return (
		<>
			<TouchableWithoutFeedback onPress={handlePressHeart}>
				<View style={styles.absolute}>
					<Image style={styles.circle as any} source={require('./circle.png')} />
					<Image style={[styles.heart, heartStyle]} source={require('./heart.png')} />
				</View>
			</TouchableWithoutFeedback>
			{children}
		</>
	);
};

export default LikeableContainer;
