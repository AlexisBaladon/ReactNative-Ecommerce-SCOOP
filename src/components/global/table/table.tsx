import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomText from '../customText/customText'
import Line from '../line/line';
import COLORS from '../../../constants/colors';

interface IProps {
    thead: string[];
    tbody: string[][];
}

const Table: React.FC<IProps> = ({ thead, tbody }) => {
    const styles = createStyles(thead.length)

    return (
        <View style={styles.container} >
            <View style={styles.thead}>
                {thead.map((th, i) => {
                    return (
                        <View key={i} style={styles.tvalue}>
                            <CustomText 
                                numberOfLines={1}
                                ellipsizeMode="tail" 
                                style={styles.textTitleValue} 
                                size='small' 
                                textType='bold'
                            >
                                {th}
                            </CustomText>
                        </View>
                    )
                })}

            </View>
            <View style={styles.tbody}>
                {tbody.map((tr, i) => {
                    return (
                        <View key={i}>
                            <View style={styles.tdata}>
                                {tr.map((td, j) => {
                                    return (
                                    <View key={j} style={styles.tvalue}>
                                        <CustomText 
                                            numberOfLines={1}
                                            ellipsizeMode="tail" 
                                            style={styles.textValue} 
                                            size='small'
                                        >
                                            {td}
                                        </CustomText>
                                    </View>)
                                })}
                            </View>
                            <Line />
                        </View>
                    )
                })}
            </View>
        </View>
  )
}


const createStyles = (attributeLength: number): StyleSheet.NamedStyles<any> => {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        thead: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundColor: COLORS.MAIN_COLOR,
            padding: 10,
            
        },
        tbody: {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            backgroundColor: COLORS.NEUTRAL_COLOR,
        },
        tdata: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 10,
            backgroundColor: COLORS.LIGHT_COLOR,

        },
        tvalue: {
            width: `${100 / attributeLength}%`,
            alignContent: 'space-between',
            justifyContent: 'center',
            textAlign: 'center',
            paddingHorizontal: 5,
            paddingVertical: 5,
        },
        textTitleValue: {
            color: COLORS.LIGHT_COLOR,
        },
        textValue: {
            color: COLORS.DARK_COLOR,
        }
    })
}

export default Table