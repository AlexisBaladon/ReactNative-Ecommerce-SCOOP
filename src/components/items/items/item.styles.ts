import { StyleSheet } from 'react-native';
import { LIGHT_COLOR } from '../../../constants/styles';

const createStyles = (height: number | string) => StyleSheet.create({
    items: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    item: {
        minHeight: 150, height,
        paddingHorizontal: "6%",
        marginVertical: 15,
        borderColor: LIGHT_COLOR,
        borderWidth: 1,
        borderRadius: 15,
    },
    emptyListTextContainer: {
        width: '100%', height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    emptyListText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'gray',
    },
});

export default createStyles;