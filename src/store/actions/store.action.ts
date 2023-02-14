import type { DtItem } from "../../interfaces";
import type { CartActions } from "../types";

export const getItems = (category?: string) => {
    return async (dispatch: (action: CartActions) => void) => {
        try {
        const response = await fetch(`${API_URL}/orders.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: Date.now(),
                items,
                total,
            }),
        });
    
        const result = await response.json();
    
        dispatch({
            type: CONFIRM_ORDER,
            orderId: result.name,
            
        });
        } catch (error) {
            dispatch({
                type: CONFIRM_ORDER,
                error,
            });
        }
    };
};