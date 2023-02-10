import React, { useEffect, useMemo, useState } from 'react';
import { Items, Buttons, Search } from '../../components';
import { View, Alert, Pressable } from 'react-native';
import { styles } from './favourites.styles';
import { TEXT } from '../../constants';
import { type DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';
import { useSelector, useDispatch } from 'react-redux';
import { type FavouritesParamList } from '../../navigation/types/favourites.types';
import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { removeAllItemsFavourites } from '../../store/actions/favourites.action';
import type { StoreState } from '../../store';
import { filterItemFunction } from '../../helpers/itemFilter';

const {
	NO_ITEMS_MESSAGE,
	DELETE_ALL_ITEMS_TITLE,
	DELETE_ALL_ITEMS_DESCRIPTION,
	CANCEL_TITLE,
	SEARCH_PLACEHOLDER,
} = TEXT;

type FavouritesScreenNavigationProp = NativeStackScreenProps<FavouritesParamList, 'Favourites'>;

const FavouritesScreen: React.FC<FavouritesScreenNavigationProp> = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const items: DtItem[] = useSelector((state: StoreState) => state.favourites.items);
	const [query, setQuery] = useState(''); // TODO: useFilter custom hook
	const shownItems = useMemo(() => items.filter(filterItemFunction(query)), [items, query]);

	const handleDeleteAllItems = (): void => {
		dispatch(removeAllItemsFavourites());
	};

	useEffect(() => {
		return () => {
			setQuery('');
		};
	}, []);

	const onHandleDeleteAllItems = (): void => {
		Alert.alert(DELETE_ALL_ITEMS_TITLE, DELETE_ALL_ITEMS_DESCRIPTION, [
			{ text: CANCEL_TITLE, style: 'cancel' },
			{ text: DELETE_ALL_ITEMS_TITLE, onPress: handleDeleteAllItems },
		]);
	};

	interface TButton {
		title: string;
		onPress: () => void;
		pressed: boolean;
	}
	const buttons: TButton[] = [
		{ title: DELETE_ALL_ITEMS_TITLE, onPress: onHandleDeleteAllItems, pressed: false },
	];

	const handlePress = (item: DtItem): void => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<Pressable
				style={styles.item}
				onPress={() => {
					handlePress(item);
				}}
			>
				<StoreItem item={item} selling={false} />
			</Pressable>
		);
	};

	return (
		<>
			<View style={styles.search}>
				<Search onChangeText={setQuery} placeHolder={SEARCH_PLACEHOLDER} />
			</View>
			<Buttons buttons={buttons} />
			<Items
				shownItems={shownItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={2}
			/>
		</>
	);
};

export default FavouritesScreen;
