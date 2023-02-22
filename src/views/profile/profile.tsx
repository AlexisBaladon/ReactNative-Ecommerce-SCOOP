import React, { useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/actions/orders.actions';
import { CustomText } from '../../components'
import Table from '../../components/global/table/table';
import type { ReduxStoreState } from '../../store';
import { COLORS, TEXT } from '../../constants';

const { CURRENCY_SYMBOL } = TEXT

const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state: ReduxStoreState) => state.auth.userId);
    const mail = useSelector((state: ReduxStoreState) => state.auth.email);
    const shownName = mail !== null ? mail.split('@')[0] : '';
    const orders = useSelector((state: ReduxStoreState) => state.orders.orders);

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

    return (<View>
        <ScrollView contentContainerStyle={styles.container}>
            <CustomText size='big' textType='regular'>{`Bienvenid@ ${shownName}!`}</CustomText>  
            {tbodies.map((tbody, i) => (
                <View key={i} style={styles.tableContainer} >
                    <View style={styles.tableHeader}>
                        <CustomText size='small' textType='bold' >{'Orden: '}</CustomText>
                        <CustomText size='small'> {`${orders[i].id ?? '(Id no encontrado)'}`}</CustomText>
                    </View>
                    <View style={styles.tableHeader}>
                        <CustomText size='small' textType='bold' >{'Descuento: '}</CustomText>
                        <CustomText size='small'>{`${orders[i].discountPercentage ?? 0}%  `}</CustomText>
                        <CustomText size='small' textType='bold' >{'Envío: '}</CustomText>
                        <CustomText size='small'>{`${orders[i].carriagePrice ?? 0}${CURRENCY_SYMBOL}`}</CustomText>
                    </View>
                    <View style={styles.table} >
                        <Table thead={thead} tbody={tbody} />
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    tableContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    tableHeader: {
        alignSelf: 'flex-start',
        marginHorizontal: 25,
        display: 'flex',
        flexDirection: 'row',
    },
    table: {
        flex: 0,
        width: '90%',
        backgroundColor: 'gray',
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.MAIN_COLOR,
    }
})


export default ProfileScreen