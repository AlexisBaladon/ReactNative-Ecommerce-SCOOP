import React, { useContext } from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { FavouritesContextComponents } from '../../../../context';
import { DtItem } from '../../../../interfaces';
import styles from './likeableContainer.styles';

interface IProps {
    children: React.ReactNode;
    item: DtItem;
}

const LikeableContainer: React.FC<IProps> = ({children, item}) => {
    const { FavouriteItemsContext } = FavouritesContextComponents;

    const { addItem, deleteItem, itemExists } = useContext(FavouriteItemsContext)

    const handlePressHeart = () => {
        itemExists(item.id) ? deleteItem(item.id) : addItem(item);
    }

    const existsItem = itemExists(item.id);
    const heartStyle = existsItem ? styles.likedHeart : {};

    return (<>
        <TouchableWithoutFeedback onPress={handlePressHeart}>
            <View style={styles.absolute}>
                <Image style={styles.circle} source={require('./circle.png')} />
                <Image style={[styles.heart, heartStyle]} source={require('./heart.png')} />
            </View>
        </TouchableWithoutFeedback>
        {children}
    </>)
}

export default LikeableContainer;