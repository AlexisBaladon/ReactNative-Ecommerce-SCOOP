import type { DtItem } from "../../interfaces";

export type CartParams = {
    name: string;
}

export type CartParamList = {
    Cart: CartParams;
    Detail: CartParams & { item: DtItem };
    Checkout: CartParams;
}