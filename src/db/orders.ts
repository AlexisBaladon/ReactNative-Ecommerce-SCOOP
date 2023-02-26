import type { Order } from "../firebase/models/orders";
import { db } from "./";

export const persistOrders = async (orders: Order[]): Promise<null | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            orders.forEach((order) => {
                tx.executeSql(`
                    INSERT OR REPLACE INTO orders (
                        id,
                        items,
                        discountPercentage,
                        carriagePrice,
                        paymentMethod,
                        location,
                        phone,
                        postalCode,
                        totalPrice,
                        orderDate,
                    ) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                        String(order.id),
                        JSON.stringify(order.items),
                        Number(order.discountPercentage),
                        Number(order.carriagePrice),
                        String(order.paymentMethod),
                        String(order.location),
                        String(order.phone),
                        String(order.postalCode),
                        Number(order.totalPrice),
                        String(order.orderDate),
                    ], 
                    () => {resolve(null)},
                    (_, error) => {
                        reject(error);
                        return true;
                    }
                );
            });
        });
    });
}

export const fetchOrders = async (): Promise<Order[] | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM orders`, 
                [],
                (_, result) => {
                    const orders = result.rows._array.map((order: any) => {
                        return {
                            ...order,
                            items: JSON.parse(order.items),
                        }
                    });
                    resolve(orders);
                },
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
}

export const deleteOrders = async (id: Order['id']): Promise<null | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM orders WHERE id = ?`, 
                [id],
                () => {resolve(null)},
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
}

export const deleteAllOrders = async (): Promise<null | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM orders`, 
                [],
                () => {resolve(null)},
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
}