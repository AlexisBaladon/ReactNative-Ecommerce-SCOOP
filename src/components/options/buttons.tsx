import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './button'

interface IProps {
    buttons: string[]; //TODO
}

const Buttons: React.FC<IProps> = ({buttons}) => {

    return (<View style={styles.categoryContainer}>
            {buttons.map((but, i) => {
                return <Button key={i} 
                    button={but} isSelected={!((i)%9)}/>
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