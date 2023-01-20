import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import DtItem from '../../interfaces/item';
import Button from './button'

interface IProps {
    buttons: Array<any>; //TODO: CAMBIAR
}

const Buttons: React.FC<IProps> = ({buttons}) => {

    return (<View style={styles.categoryContainer}>
            {buttons.map((but, i) => {
                return <Button 
                            key={i}
                            title={but.title}
                            isSelected={!((i)%9)}
                            onPress={but.onPress}
                        />
            })} 
        </View>
  )
}

const styles = StyleSheet.create({
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    }  
})

export default Buttons