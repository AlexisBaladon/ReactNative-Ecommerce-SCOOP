import React from 'react';
import Items from '../../components/items/items/items';
import Search from '../../components/global/search/search';
import { View, Text } from 'react-native';
import OptionsContainer from '../../components/options/options/optionsContainer';
import { styles, itemHeight } from './store.styles';
import { TEXT } from '../../constants/index';
import CustomText from '../../components/global/customText/customText';

const StoreScreen: React.FC = () => {
	const {
		HEADER_TITLE,
		SEARCH_PLACEHOLDER,
		CURRENCY_SYMBOL,
		ADD_BUTTON_MESSAGE,
		DELETE_ALL_ITEMS_TITLE,
		DELETE_ALL_ITEMS_DESCRIPTION,
		ADD_ITEM_TITLE,
		CONFIRM_CREATE_ITEM_TITLE,
		CANCEL_TITLE,
		NO_ITEMS_MESSAGE,
		DELETE_ITEM_TITLE,
		DELETE_ITEM_DESCRIPTION,
		CONFIRM_DELETE_ITEM_TITLE
	} = TEXT;

	return (
		<View style={styles.app}>
			<View style={styles.header}>
				<CustomText style={styles.title} textType='bold'>{HEADER_TITLE}</CustomText>
			</View>
			<View style={styles.search}>
				<Search placeHolder={SEARCH_PLACEHOLDER} />
			</View>
			<View style={styles.options}>
				<OptionsContainer
					currencySymbol={CURRENCY_SYMBOL}
					addButtonTitle={ADD_BUTTON_MESSAGE}
					deleteAllButtonTitle={DELETE_ALL_ITEMS_TITLE}
					deleteAllAlertDescription={DELETE_ALL_ITEMS_DESCRIPTION}
					modalTitle={ADD_ITEM_TITLE}
					acceptModalButtonTitle={CONFIRM_CREATE_ITEM_TITLE}
					cancelButtonTitle={CANCEL_TITLE}
				/>
			</View>
			<View style={styles.items}>
				<Items
					itemHeight={itemHeight}
					noItemsMessage={NO_ITEMS_MESSAGE}
					currencySymbol={CURRENCY_SYMBOL}
					deleteItemTitle={DELETE_ITEM_TITLE}
					deleteItemDescription={DELETE_ITEM_DESCRIPTION}
					cancelTitle={CANCEL_TITLE}
					confirmDeleteTitle={CONFIRM_DELETE_ITEM_TITLE}
				/>
			</View>
		</View>
	);
};

export default StoreScreen;
