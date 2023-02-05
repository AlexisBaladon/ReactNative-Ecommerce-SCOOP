import { DtItem } from '../interfaces';

export type NavbarParamList = {
	Cart: { name: string };
	Favourites: { name: string };
	Store: { name: string };
};

export type DetailParamList = {
	Detail: { name: string; item: DtItem };
};

export type RootStackParamList = NavbarParamList & DetailParamList;
