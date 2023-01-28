import React from 'react';
import { FlatList, View } from 'react-native';
import DtItem from '../../../interfaces/item';
import CustomText from '../../global/customText/customText';
import styles from './items.styles';

interface IProps {
	shownItems: DtItem[];
	RenderItem: React.FC<{item: DtItem}>;
	numColumns: number;
	noItemsMessage: string;
}

const Items: React.FC<IProps> = ({
	shownItems,
	RenderItem,
	numColumns,
	noItemsMessage, 
}) => {

	return (
		<>
			{!shownItems.length && (
				<View style={styles.emptyListTextContainer}>
					<CustomText style={styles.emptyListText}>{noItemsMessage}</CustomText>
				</View>
			)}
			{shownItems.length > 0 && (
				<FlatList
					contentContainerStyle={styles.items}
					renderItem={RenderItem}
					data={shownItems}
					keyExtractor={(item: DtItem) => item.id}
					numColumns={numColumns}
				/>
			)}
		</>
	);
};

export default Items;
