import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
    OrderDescription: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 3,
    },
    titleValue: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    value: {
        color: NEUTRAL_COLOR,
    },
    totalValue: {
        color: MAIN_COLOR,
    },
    priceDiscountRow: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default styles;