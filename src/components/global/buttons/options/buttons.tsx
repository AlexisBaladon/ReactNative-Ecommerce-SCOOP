import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './button'

interface IProps {
    buttons: Array<{title: string, onPress: () => void}>;
}

const Buttons: React.FC<IProps> = ({buttons}) => {

    return (<View style={styles.categoriesContainer}>
            {buttons.map((but, i) => {
                return <View style={styles.categoryContainer} key={i}>
                    <Button 
                        title={but.title}
                        isSelected={i==0}
                        onPress={but.onPress}
                    />
                </View>
            })} 
        </View>
  )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
    } ,
    categoryContainer: {
        marginRight: 10,
    }
})

export default Buttons