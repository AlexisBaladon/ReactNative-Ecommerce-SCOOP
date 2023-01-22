import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    imageButton: {
        width: 150, height: 150,
        aspectRatio: 1,
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        width: 150, height: 150,
        resizeMode: 'cover',
    },
});

export default styles