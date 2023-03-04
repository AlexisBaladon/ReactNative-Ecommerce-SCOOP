import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, type ImageProps, Alert } from 'react-native';
import { TEXT } from '../../constants';
import { useKeyboardListener } from '../../hooks';
import createStyles from './auth.styles';
import { CustomText } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../store/actions/auth.action';
import type { ReduxStoreState } from '../../store';
import ProfileScreen from '../profile/profile';
import { humanizeError } from '../../helpers/errorHandler';
import { isValidMail } from '../../helpers/validations';

const { BRAND_NAME } = TEXT;

const signInText = {
	title: 'Inicio de sesión',
	subtitle: 'Debes iniciar sesión para continuar',
	hasAccountMessage: '¿Aún no tienes una cuenta?',
	hasAccountAction: 'Regístrate',
	actionTitle: 'Iniciar sesión',
};

const signUpText = {
	title: 'Registro',
	subtitle: 'Debes registrarte para continuar',
	hasAccountMessage: '¿Ya tienes una cuenta?',
	hasAccountAction: 'Iniciar sesión',
	actionTitle: 'Registrarse',
};

const AuthScreen: React.FC = () => {
	const dispatch = useDispatch();
	const [visibleHeader, setVisibleHeader] = useState(true);
	useKeyboardListener(
		() => {
			setVisibleHeader(false);
		},
		() => {
			setVisibleHeader(true);
		},
	);
	const [hasAccount, setHasAccount] = useState(true);
	const bottomTabBarHeight = useBottomTabBarHeight();
	const styles = createStyles(bottomTabBarHeight, hasAccount, visibleHeader);
	const [emailStyle, setEmailStyle] = useState(styles.input);
	const [passwordStyle, setPasswordStyle] = useState(styles.input);
	const [confirmPasswordStyle, setConfirmPasswordStyle] = useState(styles.input);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const isLogged = useSelector((state: ReduxStoreState) => state.auth.userId != null);
	const isLoading = useSelector((state: ReduxStoreState) => state.auth.loading);
	const error = useSelector((state: ReduxStoreState) => state.auth.error);
	const cartItems = useSelector((state: ReduxStoreState) => state.cart.items);
	const favouriteItems = useSelector((state: ReduxStoreState) => state.favourites.items);

	useEffect(() => {
		if (error != null) {
			Alert.alert('Error', humanizeError(error), [{ text: 'OK' }]);
		}
	}, [error]);

	const text = hasAccount ? signInText : signUpText;
	const actionTitle = isLoading ? 'Cargando...' : text.actionTitle;

	const handleOnAuth = (): void => {
		if (email === '' || password === '') {
			Alert.alert('Error', 'Debes llenar todos los campos', [{ text: 'OK' }]);
			return;
		}
		if (!hasAccount && password !== confirmPassword) {
			Alert.alert('Error', 'Las contraseñas no coinciden', [{ text: 'OK' }]);
			return;
		}
		if (!isValidMail(email)) {
			Alert.alert('Error', 'El correo electrónico no es válido', [{ text: 'OK' }]);
			return;
		}

		if (hasAccount) {
			dispatch(login(email, password) as any);
		} else {
			dispatch(register(email, password, confirmPassword, favouriteItems, cartItems) as any);
		}
	};

	if (isLogged) {
		return <ProfileScreen />;
	}
	return (
		<>
			<View style={styles.auth}>
				{!visibleHeader ? null : (
					<View style={styles.brand}>
						<Image source={require('./icon.png')} style={styles.logo as ImageProps} />
						<CustomText textType="bold" size="xx-big" style={styles.brandName}>
							{BRAND_NAME.toUpperCase()}
						</CustomText>
					</View>
				)}
				<View style={styles.bottomInfo}>
					<View style={styles.headings}>
						<CustomText style={styles.title} size="big" textType="bold">
							{text.title}
						</CustomText>
						<CustomText size="small">{text.subtitle}</CustomText>
					</View>

					<View style={styles.form}>
						<CustomText textType="bold" size="small">
							Correo electrónico
						</CustomText>
						<TextInput
							style={emailStyle}
							placeholder="Correo electrónico"
							editable={!isLoading}
							selectTextOnFocus={!isLoading}
							onPressIn={() => {
								setEmailStyle({ ...styles.input, ...styles.pressedInput });
							}}
							onBlur={() => {
								setEmailStyle(styles.input);
							}}
							onChangeText={(text) => {
								setEmail(text);
							}}
							autoCapitalize="none"
							autoCorrect={false}
						/>
						<CustomText textType="bold" size="small">
							Contraseña
						</CustomText>
						<TextInput
							style={passwordStyle}
							placeholder="Contraseña"
							secureTextEntry={true}
							editable={!isLoading}
							selectTextOnFocus={!isLoading}
							onFocus={() => {
								setPasswordStyle({ ...styles.input, ...styles.pressedInput });
							}}
							onBlur={() => {
								setPasswordStyle(styles.input);
							}}
							onChangeText={(text) => {
								setPassword(text);
							}}
						/>
						{hasAccount ? null : (
							<>
								<CustomText textType="bold" size="small">
									Confirmar contraseña
								</CustomText>
								<TextInput
									style={confirmPasswordStyle}
									placeholder="Contraseña"
									secureTextEntry={true}
									editable={!isLoading}
									selectTextOnFocus={!isLoading}
									onFocus={() => {
										setConfirmPasswordStyle({
											...styles.input,
											...styles.pressedInput,
										});
									}}
									onBlur={() => {
										setConfirmPasswordStyle(styles.input);
									}}
									onChangeText={(text) => {
										setConfirmPassword(text);
									}}
								/>
							</>
						)}
					</View>
					<TouchableOpacity onPress={handleOnAuth} style={styles.authButton}>
						<CustomText style={styles.authButtonText}> {actionTitle} </CustomText>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<CustomText size="small">{text.hasAccountMessage}</CustomText>
						<TouchableOpacity
							onPress={() => {
								setHasAccount(!hasAccount);
							}}
						>
							<CustomText
								style={styles.hasAccountAction}
								size="small"
								textType="bold"
							>
								{' '}
								{text.hasAccountAction}
							</CustomText>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	);
};

export default AuthScreen;
