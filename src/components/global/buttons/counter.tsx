import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MAIN_COLOR } from '../../../constants/styles';
import useCounter from '../../../hooks/useCounter';

interface IProps {
    addCharacter: string;
    decCharacter: string;
    minCount?: number;
    initialCount?: number;
    height?: number | string;
    width?: number | string;
}

const Counter: React.FC<IProps> = ({addCharacter, decCharacter, minCount=1, initialCount=1, height=80, width=25}) => {
    const styles = getStyles(height, width);
    const [count, addToCounter, decToCounter] = useCounter(minCount, initialCount);

    return (<>
        <View style={styles.counter}>
            <TouchableOpacity onPress={() => addToCounter(1)}>
                <Text style={styles.text}>
                    {addCharacter}
                </Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.text}
                keyboardType={'numeric'} 
                defaultValue={count.toString()} 
                placeholder={count.toString()}
                value={count.toString()}
            >
            </ TextInput>
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
            backgroundColor: 'whitesmoke',
            borderRadius: 25,
        },
        text: {
            color: MAIN_COLOR,
            fontWeight: 'bold',
            textAlign: 'center',
        }
    });
}

export default Counter;