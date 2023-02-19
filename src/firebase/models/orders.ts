import type { DtItemCart } from '../../interfaces';

export interface Order {
	id?: string;
	items: DtItemCart[];
	discountPercentage: number;
	carriagePrice: number;
	paymentMethod: string;
	location: string;
	phone: string;
	postalCode: string;
	totalPrice: number;
	orderDate: Date;
}
