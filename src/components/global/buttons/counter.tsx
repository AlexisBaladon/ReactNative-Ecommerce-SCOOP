import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_COLOR } from '../../../constants/styles';
import useCounter from '../../../hooks/useCounter';

interface IProps {
    addCharacter: string;
    decCharacter: string;
    height?: number | string;
    width?: number | string;
}

const Counter: React.FC<IProps> = ({addCharacter, decCharacter, height=80, width=25}) => {
    const styles = getStyles(height, width);
    const [count, addToCounter, decToCounter] = useCounter(0);

    return (<>
        <View style={styles.counter}>
            <TouchableOpacity onPress={() => addToCounter(1)}>
                <Text style={styles.text}>
                    {addCharacter}
                </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                {count}
            </Text>
            <TouchableOpacity onPress={() => decToCounter(1)}>
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