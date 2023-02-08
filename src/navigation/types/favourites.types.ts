import type { DtItem } from "../../interfaces";

export type FavouritesParams = {
    name: string;
}

export type FavouritesParamList = {
    Favourites: FavouritesParams;
    Detail: FavouritesParams & { item: DtItem };
}