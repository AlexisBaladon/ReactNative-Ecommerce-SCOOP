// import { Order } from "../models/orders";

// export const createOrder = async (order: Order, userId: string) => {
//     return async (dispatch: (action: OrderActions) => void) => {
//         try {
//             const response = await fetch(`${ORDERS_URL}/${userId}.json`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(order),
//             });
//             const data = await response.json();
//             const orderId = data.name;
//             dispatch({ type: 'CREATE_ORDER', order: { ...order, id: orderId } });
//         }
//         catch (error) {
//             console.log(error as Error);
//         }
//     }
// }
