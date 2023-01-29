import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemHeight = 260;

const styles = StyleSheet.create({
    item: {
        minHeight: 250,
        maxWidth: width*0.45,
        width: itemHeight*0.67, height: itemHeight,
        margin: 10,
    },
});

export { styles, itemHeight };
