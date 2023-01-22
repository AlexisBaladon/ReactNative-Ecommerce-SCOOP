import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MAIN_COLOR } from '../../../constants/styles';

interface IProps {
    addCharacter: string;
    decCharacter: string;
    addToCounter: (addedCount: number) => void;
    count: number;
    decToCounter: (decCount: number) => void;
    height?: number | string;
    width?: number | string;
}

const Counter: React.FC<IProps> = ({
        addCharacter,
        decCharacter, 
        addToCounter, 
        count, 
        decToCounter,
        height=80, 
        width=25
    }) => {

    const styles = getStyles(height, width);

    const onChangeCount = (text: string) => {
        const inputCount = Number.parseInt(text);
        if (!Number.isNaN(inputCount)) {
            const addedCount = inputCount - count;
            if (addedCount > 0) addToCounter(addedCount);
            else decToCounter(-addedCount);
        }
    }

    return (<>
        <View style={styles.counter}>
            <TouchableOpacity style={styles.addDecButton} onPress={() => addToCounter(1)}>
                <Text style={styles.text}>
                    {addCharacter}
                </Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.text}
                keyboardType={'numeric'} 
                onChangeText={onChangeCount}
                value={count.toString()}
            />
            <TouchableOpacity style={styles.addDecButton} onPress={() => decToCounter(1)}>
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'whitesmoke',
            borderRadius: 25,
        },
        addDecButton: {
            width: '100%',
        },
        text: {
            color: MAIN_COLOR,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
        }
    });
}

export default Counter;