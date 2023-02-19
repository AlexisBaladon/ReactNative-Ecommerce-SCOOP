import React from 'react';
import { View } from 'react-native';
import styles from './orderDescription.styles';
import CustomText from '../global/customText/customText';
import Line from '../global/line/line';

interface IProps {
	totalItems: number;
	subtotal: number;
	total: number;
	discountPercentage: number;
	carriage: number;
	currencySymbol: string;
}

const OrderDescription: React.FC<IProps> = ({
	totalItems,
	subtotal,
	total,
	discountPercentage,
	carriage,
	currencySymbol,
}) => {
	const totalPrice = Number(total.toFixed(2));
	return (
		<>
			<View style={styles.OrderDescription}>
				<View style={styles.titleValue}>
					<CustomText size="small">Items totales:</CustomText>
					<CustomText size="small" style={styles.value}>
						{totalItems}
					</CustomText>
				</View>
				<View style={styles.titleValue}>
					<CustomText size="small">Subtotal:</CustomText>
					<CustomText size="small" style={styles.value}>
						{subtotal}
						{currencySymbol}
					</CustomText>
				</View>
				<View style={styles.titleValue}>
					<CustomText size="small">Envío:</CustomText>
					<CustomText size="small" style={styles.value}>
						{carriage === 0 ? 'Gratis' : `${carriage}${currencySymbol}`}
					</CustomText>
				</View>
				<Line />
				<View style={styles.titleValue}>
					<CustomText textType="bold">Total:</CustomText>
					<View style={styles.priceDiscountRow}>
						<CustomText style={styles.value}>
							{' '}
							{discountPercentage > 0 && totalItems > 0
								? `(-${discountPercentage}%)`
								: ''}{' '}
						</CustomText>
						<CustomText textType="bold" style={styles.totalValue}>
							{' '}
							{totalPrice}
							{currencySymbol}
						</CustomText>
					</View>
				</View>
			</View>
		</>
	);
};

export default OrderDescription;
