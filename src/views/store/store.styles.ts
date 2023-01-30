import { Dimensions, StyleSheet } from 'react-native';

let itemHeight = 290;
const { width, height } = Dimensions.get('window');
itemHeight = Math.min(height*0.40, itemHeight);

const styles  =  StyleSheet.create({
	
    item: {
        minHeight: 300,
        width: itemHeight*0.6, height: itemHeight,
        margin: 10,
        maxWidth: width*0.45,
    },
    search: {
        height: 60,
    },
});
    
export default styles;