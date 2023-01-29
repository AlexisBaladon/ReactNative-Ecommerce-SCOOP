import React, { useContext } from 'react';
import { Items, Buttons } from '../../components';
import { View, Alert } from 'react-native';
import { styles } from './favourites.styles';
import { TEXT } from '../../constants';
import { FavouritesContextComponents } from '../../context';
import { DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';

const {
	NO_ITEMS_MESSAGE,
	DELETE_ALL_ITEMS_TITLE,
	DELETE_ALL_ITEMS_DESCRIPTION,
	CANCEL_TITLE,
} = TEXT;

const FavouritesScreen: React.FC = () => {
	const { FavouriteItemsContext } = FavouritesContextComponents;
	const { shownItems, deleteAllItems } = useContext(FavouriteItemsContext);

	const onHandleDeleteAllItems = () => {
		Alert.alert(
			DELETE_ALL_ITEMS_TITLE,
			DELETE_ALL_ITEMS_DESCRIPTION, [
				{text: CANCEL_TITLE, style: 'cancel'},
				{text: DELETE_ALL_ITEMS_TITLE, onPress: deleteAllItems},
			]
		)
	}

	type TButton = { title: string; onPress(): void, pressed: boolean };
	const buttons: Array<TButton> = [
		{ title: DELETE_ALL_ITEMS_TITLE, onPress: onHandleDeleteAllItems, pressed: false },
	];

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<StoreItem item={item} selling={false} />
			</View>
		);
	};

	return (<>
		<Buttons buttons={buttons} />
		<Items
			shownItems={shownItems}
			noItemsMessage={NO_ITEMS_MESSAGE} 
			RenderItem={RenderItem} 
			numColumns={2} 			
		/>
	</>);
};

export default FavouritesScreen;
