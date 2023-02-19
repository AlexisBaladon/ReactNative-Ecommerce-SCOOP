import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, type ImageProps } from 'react-native';
import { TEXT } from '../../constants';
import { useKeyboardListener } from '../../hooks';
import createStyles from './auth.styles';
import { Checkbox, CustomText } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../store/actions/auth.action';
import type { ReduxStoreState } from '../../store';

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

	const isLogged = useSelector((state: ReduxStoreState) => state.auth.userId !== null);

	const text = hasAccount ? signInText : signUpText;

	const handleOnAuth = (): void => {
		const toDispatch = hasAccount
			? login(email, password)
			: register(email, password, confirmPassword);
		dispatch(toDispatch as any);
	};

	const Profile: React.FC = () => {
		const mail = useSelector((state: ReduxStoreState) => state.auth.email);
		const shownName = mail !== null ? mail.split('@')[0] : '';
		return (
			<View
				style={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
				}}
			>
				<View>
					<Image
						source={require('./icon.png')}
						style={{ ...(styles.logo as ImageProps), tintColor: 'blue' }}
					/>
					<CustomText
						textType="bold"
						size="xx-big"
						style={{ ...styles.brandName, color: 'blue' }}
					>
						{BRAND_NAME.toUpperCase()}
					</CustomText>
				</View>
				<CustomText
					textType="regular"
					size="big"
					style={{ ...styles.brandName, color: 'blue' }}
				>
					{'Bienvenid@ ' + shownName}
				</CustomText>
			</View>
		);
	};

	if (isLogged) {
		return <Profile />;
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
						<Checkbox title={'Recuérdame'} size={20} initiallyChecked={true} />
					</View>
					<TouchableOpacity
						onPress={() => {
							dispatch(login('a@a.com', '123456') as any);
						}}
						style={styles.authButton}
					>
						<CustomText style={styles.backButtonText}>LOGIN TEST</CustomText>
					</TouchableOpacity>

					<TouchableOpacity onPress={handleOnAuth} style={styles.authButton}>
						<CustomText style={styles.authButtonText}>{text.actionTitle}</CustomText>
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
