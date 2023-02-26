import React, { useEffect } from 'react';
import { View, Pressable, Alert } from 'react-native';
import { TEXT } from '../../constants/index';
import { Buttons, Items, Search } from '../../components';
import styles from './store.styles';
import { type DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';
import { type StoreParamList } from '../../navigation/types/store.types';
import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useDispatch, useSelector } from 'react-redux';
import type { ReduxStoreState } from '../../store';
import { useFilter } from '../../hooks';
import { fetchFavouriteItems, fetchItemsCart, getStoreItems } from '../../store/actions';
import { type ItemFetchParameters } from '../../store/types';

const { NO_ITEMS_MESSAGE, SEARCH_PLACEHOLDER } = TEXT;

type StoreScreenNavigationProp = NativeStackScreenProps<StoreParamList, 'Store'>;

const StoreScreen: React.FC<StoreScreenNavigationProp> = ({ navigation, route }) => {
	const items: DtItem[] = useSelector((state: ReduxStoreState) => state.store.items);
	const categories: string[] = useSelector((state: ReduxStoreState) => state.store.categories);
	const isLoading: boolean = useSelector((state: ReduxStoreState) => state.store.loading);
	const error = useSelector((state: ReduxStoreState) => state.store.error);
	const { filterText: setSearchText, currentCategory, filterCategory, filteredItems: shownItems } = useFilter(items);

	const dispatch = useDispatch();
	const userId = useSelector((state: ReduxStoreState) => state.auth.userId);

	useEffect(() => {
		const storeParameters: ItemFetchParameters = { orderBy: 'type', orderDirection: 'asc' };
		dispatch(getStoreItems(storeParameters) as any);
	}, []);

	useEffect(() => {
		dispatch(fetchFavouriteItems(userId) as any);
		dispatch(fetchItemsCart(userId) as any);
	}, [userId]);

	useEffect(() => {
		if (error !== null) {
			Alert.alert('Error', error.message, [{ text: 'OK' }]);
		}
	}, [error]);

	interface TButton {
		title: string;
		onPress: () => void;
		pressed: boolean;
	}
	const buttons: TButton[] = [
		{ title: 'Todos', onPress: () => {filterCategory(null)}, pressed: currentCategory === null },
		...categories.map((category) => {
			return {
				title: category,
				onPress: () => {filterCategory(category)},
				pressed: currentCategory === category,
			};
		}),
	];

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<Pressable
				style={styles.item}
				onPress={() => {
					handlePress(item);
				}}
			>
				<StoreItem item={item} selling={true} />
			</Pressable>
		);
	};

	const handlePress = (item: DtItem): void => {
		navigation.navigate('Detail', {
			name: item.title,
			item,
		});
	};

	return (
		<>
			<View style={styles.search}>
				<Search placeHolder={SEARCH_PLACEHOLDER} onChangeText={setSearchText} />
			</View>
			<View style={styles.options}>
				<Buttons buttons={buttons} />
			</View>
			<Items
				shownItems={shownItems}
				noItemsMessage={NO_ITEMS_MESSAGE}
				RenderItem={RenderItem}
				numColumns={2}
				isLoading={isLoading}
			/>
		</>
	);
};

export default StoreScreen;
