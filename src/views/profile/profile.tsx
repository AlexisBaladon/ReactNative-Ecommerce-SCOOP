import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/actions/orders.actions';
import {CustomText } from '../../components'
import Table from '../../components/global/table/table';
import type { ReduxStoreState } from '../../store';
import { TEXT } from '../../constants';
import ChoosePicture from '../../components/global/choosePicture/choosePicture';
import { ImageHandler } from '../../helpers';
import { loadPicture } from '../../store/actions/auth.action';
import { StatusBar } from 'expo-status-bar';
import styles from './profile.styles';

const { CURRENCY_SYMBOL } = TEXT

const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state: ReduxStoreState) => state.auth.userId);
    const email = useSelector((state: ReduxStoreState) => state.auth.email);
    const shownName = email !== null ? email.split('@')[0] : '';
    const orders = useSelector((state: ReduxStoreState) => state.orders.orders);
    const profileImage = useSelector((state: ReduxStoreState) => state.auth.pictureUri);
    const defaultImage = ImageHandler.getDefaultImage();

    const handleTakePicture = (): void => {
        dispatch(loadPicture(userId) as any)
    }

    useEffect(() => {
        if (userId !== null) {
            dispatch(fetchOrders(userId) as any)
        }
    }, [])

    const tbodies = orders.map((order) => {
       const products = order.items.map((item) => {
           return [item.title, String(item.price) + CURRENCY_SYMBOL, String(item.amount), String(item.price * item.amount) + CURRENCY_SYMBOL]
       })
       const formatedTotal = `${order.totalPrice}${CURRENCY_SYMBOL}`
       products.push(['', '', 'Total', formatedTotal])
       return products
    })

    const thead = ['Producto', 'Precio', 'Cantidad', 'Total']
    const shownPicture = profileImage !== null ? { uri: profileImage } : defaultImage;

    return (<View style={{marginVertical: StatusBar.length - 1}}>
        <View style={styles.choosePictureContainer}>
            <ChoosePicture 
                image={shownPicture} 
                handleChoosePicture={handleTakePicture} 
                title={email ?? 'Perfil'}
                buttonText='Tomar foto'
            />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{marginTop: 20}}>
                <CustomText style={styles.titleText} size='big' textType='bold'>{`Bienvenid@ ${shownName}!`}</CustomText>
            </View>
            {tbodies.map((tbody, i) => (
                <View key={i} style={styles.tableContainer} >
                    <View style={styles.tableHeader}>
                        <CustomText style={styles.text} size='small' textType='bold' >{'Orden: '}</CustomText>
                        <CustomText style={styles.text} size='small'> {`${orders[i].id ?? '(Id no encontrado)'}`}</CustomText>
                    </View>
                    <View style={styles.tableHeader}>
                        <CustomText style={styles.text} size='small' textType='bold' >{'Descuento: '}</CustomText>
                        <CustomText style={styles.text} size='small'>{`${orders[i].discountPercentage ?? 0}%  `}</CustomText>
                        <CustomText style={styles.text} size='small' textType='bold' >{'Envío: '}</CustomText>
                        <CustomText style={styles.text} size='small'>{`${orders[i].carriagePrice ?? 0}${CURRENCY_SYMBOL}`}</CustomText>
                    </View>
                    <View style={styles.table} >
                        <Table thead={thead} tbody={tbody} />
                    </View>
                </View>
            ))}
            {tbodies.length === 0 && <CustomText style={styles.text} size='small' textType='regular'>{'No hay ordenes para mostrar'}</CustomText>}
        </ScrollView>
    </View>)
}


export default ProfileScreen