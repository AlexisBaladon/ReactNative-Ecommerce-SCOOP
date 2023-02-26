import type { ItemFetchParameters, StoreActions } from '../types';
import { getItems as getItemsDB } from '../../firebase';
import { fetchStore, persistStore } from '../../db/store';
import { hasConnection } from '../../helpers';

export const getStoreItems = (props: ItemFetchParameters) => {
	return async (dispatch: (action: StoreActions) => void) => {
		dispatch({ type: 'LOADING_STORE' });
		const hasInternet = await hasConnection();
		try {
			const items = hasInternet ? await getItemsDB(props) : await fetchStore(props);
			if (items instanceof Error) throw items;
			await persistStore(items)
			dispatch({ type: 'GET_ITEMS', items });
		} catch (error) {
			dispatch({ type: 'ERROR', error: error as Error });
		}
	};
};
