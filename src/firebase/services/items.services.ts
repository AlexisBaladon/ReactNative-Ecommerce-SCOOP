import { API_URL } from '../env';
import type { DtItem } from '../../interfaces';
import type { ItemFetchParameters } from '../../store/types';

const orderByMap = {
	title: (a: DtItem, b: DtItem) => a.title.localeCompare(b.title),
	price: (a: DtItem, b: DtItem) => a.price - b.price,
	type: (a: DtItem, b: DtItem) => a.type.localeCompare(b.type),
};

export const getItem = async (id: string): Promise<DtItem | Error | undefined> => {
	try {
		const response = await fetch(`${API_URL}/items/${id}.json`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};

export const getItems = async (props: ItemFetchParameters): Promise<DtItem[]> => {
	const { orderBy, orderDirection, type } = props;
	const response = await fetch(`${API_URL}/items.json`);
	let data = await response.json();
	if (data === null) return [];
	data = Object.keys(data).map((key) => ({ ...data[key], id: key }));
	if (orderBy !== undefined) {
		data = data.sort(orderByMap[orderBy]);
		if (orderDirection === 'desc') {
			data = data.reverse();
		}
	}
	if (type !== undefined) {
		data = data.filter((item: DtItem) => item.type === type);
	}
	return data;
};
