import React, { useContext } from 'react'
import { Image, TouchableHighlight } from 'react-native';
import { FavouritesContextComponents } from '../../../../context';
import { DtItem } from '../../../../interfaces';
import styles from './likeableContainer.styles';

interface IProps {
    children: React.ReactNode;
    item: DtItem;
}

const LikeableContainer: React.FC<IProps> = ({children, item}) => {
    const { FavouriteItemsContext } = FavouritesContextComponents;

    const { addItem } = useContext(FavouriteItemsContext)

    const handleAddItem = () => {
        addItem(item);
    }

    return (<>
        <TouchableHighlight style={styles.absolute} onPress={(handleAddItem)}>
            <>
                <Image style={styles.circle} source={require('./circle.png')} />
                <Image style={styles.heart} source={require('./heart.png')} />
            </>
        </TouchableHighlight>
        {children}
    </>)
}

export default LikeableContainer;