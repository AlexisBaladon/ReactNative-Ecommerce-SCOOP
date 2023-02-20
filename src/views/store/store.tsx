import React, { useEffect } from 'react';
import { View, Pressable } from 'react-native';
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
import { getStoreItems } from '../../store/actions';
import { type ItemFetchParameters } from '../../store/types';

const { NO_ITEMS_MESSAGE, SEARCH_PLACEHOLDER } = TEXT;

type StoreScreenNavigationProp = NativeStackScreenProps<StoreParamList, 'Store'>;


const StoreScreen: React.FC<StoreScreenNavigationProp> = ({ navigation, route }) => {
	const items: DtItem[] = useSelector((state: ReduxStoreState) => state.store.items);
	const isLoading: boolean = useSelector((state: ReduxStoreState) => state.store.loading);
	const { filterText: setSearchText, filteredItems: shownItems } = useFilter(items);

	
	const dispatch = useDispatch();

	useEffect(() => {
		const storeParameters: ItemFetchParameters = { orderBy: 'type', orderDirection: 'asc' };
		dispatch(getStoreItems(storeParameters) as any);
	}, []);
	
	interface TButton {
		title: string;
		onPress: () => void;
		pressed: boolean;
	}
	const buttons: TButton[] = [{ title: 'Todos', onPress: () => {}, pressed: true }];
	
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
