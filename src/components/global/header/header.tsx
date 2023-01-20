import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

interface IProps {
    title: string;
}

const Header: React.FC<IProps> = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Image 
                style={styles.hamburger}
                source={require('./hamburger.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginLeft: 15, marginRight: 20,
        marginTop: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backArrow: {
        width: 30, height: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    hamburger: {
        width: 37.5, height: 37.5,
    }
})

export default Header;