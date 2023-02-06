import { type DtItem } from '../interfaces';

type NavParams = {
	name: string,
}

export type NavbarParamList = {
	Cart: NavParams;
	Favourites: NavParams;
	Store: NavParams;
	Onboarding: NavParams;
}

export type DetailParamList = {
	Detail: NavParams & { item: DtItem };
}

export type RootStackParamList = NavbarParamList & DetailParamList;
