import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useRef } from 'react';
import { Image, ScrollView, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './checkout.styles';
import type { ReduxStoreState } from '../../store';
import type { CartParamList } from '../../navigation/types/cart.types';
import { Buttons, CustomText, Line } from '../../components';
import { COLORS } from '../../constants';

const { LIGHT_COLOR } = COLORS;

type CheckoutScreenNavigationProp = NativeStackScreenProps<CartParamList, 'Checkout'>;

const CheckoutScreen: React.FC<CheckoutScreenNavigationProp> = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: ReduxStoreState) => state.cart.items);

	const locationRef = useRef<TextInput>(null);
	const phoneRef = useRef<TextInput>(null);
	const postalCodeRef = useRef<TextInput>(null);

	return (
		<View style={styles.screen}>
			<ScrollView style={styles.itemCheckoutScroll}>
				<View style={styles.costData}>
					<View style={styles.brand}>
						<Image source={require('./cart.png')} style={styles.storeIcon} />
						<CustomText size='big' textType='bold' style={styles.text}>
							Tienda
						</CustomText>
					</View>
					<CustomText size='medium' style={styles.text}>
						Precio
					</CustomText>
					<CustomText size='x-big' textType='bold' style={styles.text}>
						5000$
					</CustomText>
					<Line color={LIGHT_COLOR} height={3}/>
					<CustomText size='small' style={styles.text}>
						Precio con descuento del 10%
					</CustomText>
				</View>
				<View style={styles.form}>
					<CustomText size='big' textType='bold'>
						Método de pago
					</CustomText>
					<Buttons buttons={[
						{
							title: 'Efectivo',
							onPress: () => {},
							pressed: true,
						},
						{
							title: 'Paypal',
							onPress: () => {},
							pressed: false,
						},
						{
							title: 'Transferencia',
							onPress: () => {},
							pressed: false,
						},
					]} />
					<CustomText size='medium'>
						Ubicación
					</CustomText>
					<TextInput
						style={styles.input}
						placeholder='Calle, número, piso, puerta'
						ref={locationRef}
						onFocus={() => locationRef?.current?.setNativeProps({ style: styles.pressedinput })}
						onBlur={() => locationRef?.current?.setNativeProps({ style: styles.input })}
					/>
					<CustomText size='medium'>
						Teléfono
					</CustomText>
					<TextInput
						style={styles.input}
						placeholder='Teléfono'
						ref={phoneRef}
						onFocus={() => phoneRef?.current?.setNativeProps({ style: styles.pressedinput })}
						onBlur={() => phoneRef?.current?.setNativeProps({ style: styles.input })}
					/>
					<CustomText size='medium'>
						Código postal
					</CustomText>
					<TextInput
						style={styles.input}
						placeholder='Código postal'
						ref={postalCodeRef}
						onFocus={() => postalCodeRef?.current?.setNativeProps({ style: styles.pressedinput })}
						onBlur={() => postalCodeRef?.current?.setNativeProps({ style: styles.input })}
					/>
				</View>
			</ScrollView>
			<View style={{}}>
				<TouchableHighlight style={styles.checkoutButton} onPress={() => {}}>
					<CustomText style={styles.text}>
						Confirmar compra
					</CustomText>
				</TouchableHighlight>
			</View>
		</View>
	);
};

export default CheckoutScreen;
