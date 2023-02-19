import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useRef } from 'react';
import { Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './checkout.styles';
import type { ReduxStoreState } from '../../store';
import type { CartParamList } from '../../navigation/types/cart.types';
import { CustomText, Line } from '../../components';
import { COLORS, TEXT } from '../../constants';
import { useKeyboardListener } from '../../hooks';

const { LIGHT_COLOR, NEUTRAL_COLOR } = COLORS;
const { CURRENCY_SYMBOL, BRAND_NAME, PRICE_TITLE, getPriceDiscountTitle } = TEXT;

type CheckoutScreenNavigationProp = NativeStackScreenProps<CartParamList, 'Checkout'>;

const CheckoutScreen: React.FC<CheckoutScreenNavigationProp> = ({ route, navigation }) => {
	const handleKeyboardDidShow = (): void => {
		buttonContainerRef?.current?.setNativeProps({ style: { opacity: 0 } });
	};

	const handleKeyboardDidHide = (): void => {
		buttonContainerRef?.current?.setNativeProps({ style: { opacity: 1 } });
	};

	useKeyboardListener(handleKeyboardDidShow, handleKeyboardDidHide);
	const totalPrice = useSelector((state: ReduxStoreState) => state.cart.total);
	const discountPercentage = useSelector(
		(state: ReduxStoreState) => state.cart.discountPercentage,
	);

	const locationRef = useRef<TextInput>(null);
	const phoneRef = useRef<TextInput>(null);
	const postalCodeRef = useRef<TextInput>(null);
	const buttonContainerRef = useRef<View>(null);

	const handleOnFocus = (ref: React.RefObject<TextInput>): void => {
		ref?.current?.setNativeProps({ style: styles.pressedinput });
	};

	const handleOnBlur = (ref: React.RefObject<TextInput>): void => {
		ref?.current?.setNativeProps({ style: styles.input });
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
								style={styles.input}
								placeholder="Calle, número, piso, puerta"
								placeholderTextColor={NEUTRAL_COLOR}
								ref={locationRef}
								onFocus={() => {
									handleOnFocus(locationRef);
								}}
								onBlur={() => {
									handleOnBlur(locationRef);
								}}
							/>
						</View>
						<View style={styles.formItem}>
							<CustomText textType="bold" size="small">
								Teléfono
							</CustomText>
							<TextInput
								style={styles.input}
								placeholderTextColor={NEUTRAL_COLOR}
								placeholder="Teléfono"
								ref={phoneRef}
								onFocus={() => {
									handleOnFocus(phoneRef);
								}}
								onBlur={() => {
									handleOnBlur(phoneRef);
								}}
							/>
						</View>
						<View style={styles.formItem}>
							<CustomText textType="bold" size="small">
								Código postal
							</CustomText>
							<TextInput
								style={styles.input}
								placeholderTextColor={NEUTRAL_COLOR}
								placeholder="Código postal"
								ref={postalCodeRef}
								onFocus={() => {
									handleOnFocus(postalCodeRef);
								}}
								onBlur={() => {
									handleOnBlur(postalCodeRef);
								}}
							/>
						</View>
					</View>
				</ScrollView>
				<View style={styles.buttonContainer} ref={buttonContainerRef}>
					<TouchableOpacity style={styles.checkoutButton} onPress={() => {}}>
						<CustomText textType="bold" style={styles.text}>
							Confirmar compra
						</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default CheckoutScreen;
