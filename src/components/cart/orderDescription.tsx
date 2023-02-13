import React from 'react'
import { View, StyleSheet } from 'react-native'
import styles from './orderDescription.styles';
import CustomText from '../global/customText/customText';

interface IProps {
    totalItems: number;
    subtotal: number;
    discountPercentage: number;
    carriage: number;
    currencySymbol: string;
}

const OrderDescription: React.FC<IProps> = ({ 
    totalItems,
    subtotal,
    discountPercentage,
    carriage,
    currencySymbol
}) => {
    let totalPrice = subtotal + carriage;
    totalPrice = totalPrice - (totalPrice * discountPercentage / 100);
    totalPrice = totalItems > 0 ? totalPrice : totalPrice;
    totalPrice = Number(totalPrice.toFixed(2));
  return (<>
    
    <View style={styles.OrderDescription}>
        <View style={styles.titleValue}>
            <CustomText size='small'>Items totales:</CustomText>
            <CustomText size='small' style={styles.value}>{totalItems}</CustomText>
        </View>
        <View style={styles.titleValue}>
            <CustomText size='small'>Subtotal:</CustomText>
            <CustomText size='small' style={styles.value}>{subtotal}{currencySymbol}</CustomText>
        </View>
        <View style={styles.titleValue}>
            <CustomText size='small'>Envío:</CustomText>
            <CustomText size='small' style={styles.value}>{carriage === 0? 'Gratis' : `${carriage}${currencySymbol}`}</CustomText>
        </View>
        <View
        style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: '100%',
        }}
        />
        <View style={styles.titleValue}>
            <CustomText textType='bold'>Total:</CustomText>
            <View style={styles.priceDiscountRow}>
                <CustomText style={styles.value}> {(discountPercentage > 0 && totalItems > 0) ? `(-${discountPercentage}%)` : ''} </CustomText>
                <CustomText textType='bold' style={styles.totalValue}> {totalPrice} {currencySymbol}</CustomText>
            </View>
        </View>
    </View>
  </>)
}

export default OrderDescription;