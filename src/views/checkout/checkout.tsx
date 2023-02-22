import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './checkout.styles';
import type { ReduxStoreState } from '../../store';
import type { CartParamList } from '../../navigation/types/cart.types';
import { CustomText, Line } from '../../components';
import { COLORS, TEXT } from '../../constants';
import { useKeyboardListener } from '../../hooks';
import { claimOrderId, createOrder } from '../../store/actions/orders.actions';
import type { Order } from '../../firebase/models/orders';
import { removeAllItemsCart } from '../../store/actions';

const { LIGHT_COLOR, NEUTRAL_COLOR } = COLORS;
const { CURRENCY_SYMBOL, BRAND_NAME, PRICE_TITLE, getPriceDiscountTitle } = TEXT;

type CheckoutScreenNavigationProp = NativeStackScreenProps<CartParamList, 'Checkout'>;

const CheckoutScreen: React.FC<CheckoutScreenNavigationProp> = ({ route, navigation }) => {
	const buttonContainerRef = useRef<View>(null);
	const handleKeyboardDidShow = (): void => {
		buttonContainerRef?.current?.setNativeProps({ style: { opacity: 0 } });
	};

	const handleKeyboardDidHide = (): void => {
		buttonContainerRef?.current?.setNativeProps({ style: { opacity: 1 } });
	};

	useKeyboardListener(handleKeyboardDidShow, handleKeyboardDidHide);
	const totalPrice = useSelector((state: ReduxStoreState) => state.cart.total);
	const carriagePrice = useSelector((state: ReduxStoreState) => state.cart.carriage);
	const items = useSelector((state: ReduxStoreState) => state.cart.items);
	const discountPercentage = useSelector(
		(state: ReduxStoreState) => state.cart.discountPercentage,
	);
	const userId = useSelector((state: ReduxStoreState) => state.auth.userId);
	const lastAddedOrderId = useSelector((state: ReduxStoreState) => state.orders.lastAddedOrderId);
	const isLoading = useSelector((state: ReduxStoreState) => state.orders.loading);
	const error = useSelector((state: ReduxStoreState) => state.orders.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (error !== null) {
			Alert.alert('Error', error.message, [{ text: 'OK' }]);
		}
	}, [error]);

	useEffect(() => {
		if (lastAddedOrderId !== null && lastAddedOrderId !== undefined) {
			const orderId = String(lastAddedOrderId);
			Alert.alert(
				'Compra realizada',
				`Tu orden ha sido procesada de forma exitosa! Recibirás tu pedido en la brevedad. El ID de su pedido es: ${orderId}`,
				[{ text: 'OK' }],
			);
			dispatch(claimOrderId() as any);
			dispatch(removeAllItemsCart(userId) as any);
		}
	}, [lastAddedOrderId]);

	const [locationStyle, setLocationStyle] = useState(styles.input);
	const [phoneStyle, setPhoneStyle] = useState(styles.input);
	const [postalCodeStyle, setPostalCodeStyle] = useState(styles.input);
	const [location, setLocation] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [postalCode, setPostalCode] = useState<string>('');

	const handleConfirmCheckout = (): void => {
		if (userId === null) return;
		const order: Order = {
			items,
			totalPrice,
			discountPercentage,
			paymentMethod: 'cash',
			location,
			phone,
			postalCode,
			carriagePrice,
			orderDate: new Date(),
		};
		dispatch(createOrder(userId, order) as any);
	};

	return (
		<>
			<View style={styles.screen}>
				<ScrollView style={styles.itemCheckoutScroll}>
					<View style={styles.costData}>
						<View style={styles.brand}>
							<Image source={require('./cart.png')} style={styles.storeIcon} />
							<CustomText size="big" textType="bold" style={styles.text}>
								{BRAND_NAME}
							</CustomText>
						</View>
						<CustomText size="small" style={{ ...styles.text, ...styles.priceTitle }}>
							{PRICE_TITLE}
						</CustomText>
						<CustomText size="x-big" textType="bold" style={styles.text}>
							{totalPrice} {CURRENCY_SYMBOL}
						</CustomText>
						<Line color={LIGHT_COLOR} height={2} />
						<CustomText
							size="small"
							style={{ ...styles.text, ...styles.costDataDescription }}
						>
							{getPriceDiscountTitle(discountPercentage)}
						</CustomText>
					</View>
					<View style={styles.form}>
						<View style={styles.formItem}>
							<CustomText textType="bold" size="small">
								Método de pago
							</CustomText>
							<TouchableOpacity style={styles.paymentButton} onPress={() => {}}>
								<CustomText size="small" style={styles.text}>
									Efectivo
								</CustomText>
							</TouchableOpacity>
						</View>
						<View style={styles.formItem}>
							<CustomText textType="bold" size="small">
								Ubicación
							</CustomText>
							<TextInput
								style={locationStyle}
								placeholder="Calle, número, piso, puerta"
								placeholderTextColor={NEUTRAL_COLOR}
								onFocus={() => {
									setLocationStyle({ ...styles.input, ...styles.pressedinput });
								}}
								onBlur={() => {
									setLocationStyle(styles.input);
								}}
								onChangeText={setLocation}
							/>
						</View>
						<View style={styles.formItem}>
							<CustomText textType="bold" size="small">
								Teléfono
							</CustomText>
							<TextInput
								style={phoneStyle}
								placeholderTextColor={NEUTRAL_COLOR}
								placeholder="Teléfono"
								onFocus={() => {
									setPhoneStyle({ ...styles.input, ...styles.pressedinput });
								}}
								onBlur={() => {
									setPhoneStyle(styles.input);
								}}
								onChangeText={setPhone}
							/>
						</View>
						<View style={styles.formItem}>
							<CustomText textType="bold" size="small">
								Código postal
							</CustomText>
							<TextInput
								style={postalCodeStyle}
								placeholderTextColor={NEUTRAL_COLOR}
								placeholder="Código postal"
								onFocus={() => {
									setPostalCodeStyle({ ...styles.input, ...styles.pressedinput });
								}}
								onBlur={() => {
									setPostalCodeStyle(styles.input);
								}}
								onChangeText={setPostalCode}
							/>
						</View>
					</View>
				</ScrollView>
				<View style={styles.buttonContainer} ref={buttonContainerRef}>
					<TouchableOpacity style={styles.checkoutButton} onPress={handleConfirmCheckout}>
						<CustomText textType="bold" style={styles.text}>
							{isLoading ? 'Procesando compra...' : 'Confirmar compra'}
						</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default CheckoutScreen;
