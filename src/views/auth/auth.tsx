import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, TextInput, Image, TouchableOpacity, type ImageProps } from 'react-native'
import { CustomText } from '../../components'
import { TEXT } from '../../constants'
import createStyles from './auth.styles'

const { BRAND_NAME } = TEXT


const AuthScreen: React.FC = () => {
	const bottomTabBarHeight = useBottomTabBarHeight();
	const styles = createStyles(bottomTabBarHeight);
	return (
		<View style={styles.auth}>
			<View style={styles.brand}>
				<Image source={require('./icon.png')} style={styles.logo as ImageProps}/>
				<CustomText textType='bold' size='xx-big' style={styles.brandName}>{BRAND_NAME.toUpperCase()}</CustomText>
			</View>

			<View style={styles.bottomInfo}>
				<View style={styles.headings}>
					<CustomText size='big' textType='bold'>Inicio de sesión</CustomText>
					<CustomText size='small'>Debes iniciar sesión para continuar</CustomText>
				</View>

				<View style={styles.form}>
					<CustomText>Correo electrónico</CustomText>
					<TextInput style={styles.input} placeholder="Correo electrónico" />
					<CustomText>Contraseña</CustomText>
					<TextInput style={styles.input} placeholder="Contraseña" />
					
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<View style={{width: 20, height: 20, borderRadius: 2, borderWidth: 1, borderColor: 'gray'}} />
							<CustomText size='small' style={{color: 'gray'}}>Recuérdame</CustomText>
						</View>
					</View>
				</View>

				<TouchableOpacity style={styles.authButton}>
					<CustomText style={styles.authButtonText}>Iniciar sesión</CustomText>
				</TouchableOpacity>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
					<CustomText size='small'>¿Aún no tienes una cuenta?</CustomText>
					<CustomText size='small' textType='bold'> Regístrate</CustomText>
				</View>
			</View>
		</View>
	)
}

export default AuthScreen