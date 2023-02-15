import type { DtItem } from '../../interfaces';

export type StoreParams = {
	name: string;
};

export type StoreParamList = {
	Store: StoreParams;
	Detail: StoreParams & { item: DtItem };
};
