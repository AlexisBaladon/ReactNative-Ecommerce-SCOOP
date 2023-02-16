import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React, { useRef, useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, type ImageProps } from 'react-native'
import { TEXT } from '../../constants'
import { useKeyboardListener } from '../../hooks'
import createStyles from './auth.styles'
import { Checkbox, CustomText } from '../../components'

const { BRAND_NAME } = TEXT

const signInText = {
	title: 'Inicio de sesión',
	subtitle: 'Debes iniciar sesión para continuar',
	hasAccountMessage: '¿Aún no tienes una cuenta?',
	hasAccountAction: 'Regístrate',
}

const signUpText = {
	title: 'Registro',
	subtitle: 'Debes registrarte para continuar',
	hasAccountMessage: '¿Ya tienes una cuenta?',
	hasAccountAction: 'Iniciar sesión',
}

const AuthScreen: React.FC = () => {
	const [visibleHeader, setVisibleHeader] = useState(true);
	const [hasAccount, setHasAccount] = useState(true);
	useKeyboardListener(() => {setVisibleHeader(false)}, () => {setVisibleHeader(true)});
	const emailRef = useRef<TextInput>(null);
	const passwordRef = useRef<TextInput>(null);
	const confirmPasswordRef = useRef<TextInput>(null);

	const bottomTabBarHeight = useBottomTabBarHeight();
	const styles = createStyles(bottomTabBarHeight, hasAccount, visibleHeader);
	const text = hasAccount ? signInText : signUpText;

	const handleOnFocusInput = (inputRef: React.RefObject<TextInput>): void => {
		inputRef.current?.setNativeProps({style: styles.pressedInput});
		inputRef.current?.clear();
	}

	const handleOnBlurInput = (inputRef: React.RefObject<TextInput>): void => {
		inputRef.current?.setNativeProps({style: styles.input});
	}

	return (<>
		<View style={styles.auth}>
			{!visibleHeader? null:
				<View style={styles.brand}>
					<Image source={require('./icon.png')} style={styles.logo as ImageProps}/>
					<CustomText textType='bold' size='xx-big' style={styles.brandName}>{BRAND_NAME.toUpperCase()}</CustomText>
				</View>
			}
			<View style={styles.bottomInfo}>
				<View style={styles.headings}>
					<CustomText size='big' textType='bold'>{text.title}</CustomText>
					<CustomText size='small'>{text.subtitle}</CustomText>
				</View>

				<View style={styles.form}>
					<CustomText textType='bold' size='small'>Correo electrónico</CustomText>
					<TextInput 
						style={styles.input} 
						placeholder="Correo electrónico" 
						ref={emailRef}
						onPressIn={() => {handleOnFocusInput(emailRef)}}
						onBlur={() => {handleOnBlurInput(emailRef)}}
						autoCapitalize='none'
						autoCorrect={false}

					/>
					<CustomText textType='bold' size='small'>Contraseña</CustomText>
					<TextInput
						style={styles.input} 
						placeholder="Contraseña" 
						secureTextEntry={true}
						ref={passwordRef}
						onFocus={() => {handleOnFocusInput(passwordRef)}}
						onBlur={() => {handleOnBlurInput(passwordRef)}}
					/>
					{hasAccount ? null : (<>
						<CustomText textType='bold' size='small'>Confirmar contraseña</CustomText>
						<TextInput 
							style={styles.input} 
							placeholder="Contraseña" 
							secureTextEntry={true}
							ref={confirmPasswordRef}
							onFocus={() => {handleOnFocusInput(confirmPasswordRef)}}
							onBlur={() => {handleOnBlurInput(confirmPasswordRef)}}
						/>
					</>)}
					<Checkbox title={'Recuérdame'} size={20} initiallyChecked={true}/>
				</View>

				<TouchableOpacity style={styles.authButton}>
					<CustomText style={styles.authButtonText}>Iniciar sesión</CustomText>
				</TouchableOpacity>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
					<CustomText size='small'>{text.hasAccountMessage}</CustomText>
					<TouchableOpacity onPress={() => {setHasAccount(!hasAccount)}}>
						<CustomText style={styles.hasAccountAction} size='small' textType='bold'> {text.hasAccountAction}</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		</View>
		</>)
}

export default AuthScreen