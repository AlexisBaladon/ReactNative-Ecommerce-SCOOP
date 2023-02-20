import React, { useEffect } from 'react';
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
import type { ReduxStoreState } from '../../store';
import useFilter from '../../hooks/useFilter';

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
	const items: DtItem[] = useSelector((state: ReduxStoreState) => state.favourites.items);
	const userId = useSelector((state: ReduxStoreState) => state.auth.userId);
	const isLoading = useSelector((state: ReduxStoreState) => state.favourites.loading);
	const { filterText, filteredItems } = useFilter(items);

	const handleDeleteAllItems = (): void => {
		dispatch(removeAllItemsFavourites(userId) as any);
	};

	useEffect(() => {
		return () => {
			filterText('');
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
				<Search onChangeText={filterText} placeHolder={SEARCH_PLACEHOLDER} />
			</View>
			<View style={styles.options}>
				<Buttons buttons={buttons} />
			</View>
			<Items
				shownItems={filteredItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={2}
				isLoading={isLoading}
			/>
		</>
	);
};

export default FavouritesScreen;
