import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_COLOR } from '../../../constants/styles';

interface IProps {
    addCharacter: string;
    count: number | string;
    decCharacter: string;
    height?: number | string;
    width?: number | string;
}

const Counter: React.FC<IProps> = ({addCharacter, count, decCharacter, height=80, width=25}) => {
    const styles = getStyles(height, width);
    return (<>
        <View style={styles.counter}>
            <TouchableOpacity>
                <Text style={styles.text}>
                    {addCharacter}
                </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                {count}
            </Text>
            <TouchableOpacity>
                <Text style={styles.text}>
                    {decCharacter}
                </Text>
            </TouchableOpacity>
        </View>
    </>
    )
}

const getStyles = (height: number | string, width: number | string) => {
    return StyleSheet.create({
        counter: {
            width: width, height: height,            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 25,
        },
        text: {
            color: MAIN_COLOR,
            fontWeight: 'bold',
        }
    });
}

export default Counter;