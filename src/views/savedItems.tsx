import React from 'react';
import Items from '../components/items/items/items';
import Search from '../components/global/search/search';
import { View, Text } from 'react-native';
import OptionsContainer from '../components/options/options/optionsContainer';
import { styles, itemHeight } from './savedItems.styles';
import { TEXT } from '../constants/index';

const SavedItems = () => {
	const {
		HEADER_TITLE,
		SEARCH_PLACEHOLDER,
		CURRENCY_SYMBOL,
		ADD_BUTTON_MESSAGE,
		DELETE_ALL_BUTTON_MESSAGE,
		ADD_ITEMS_TITLE,
		ACCEPT_ADD_BUTTON_TITLE,
		CANCEL_ADD_BUTTON_TITLE,
		NO_ITEMS_MESSAGE,
	} = TEXT;

	return (
		<View style={styles.app}>
			<View style={styles.header}>
				<Text style={styles.title}>{HEADER_TITLE}</Text>
			</View>
			<View style={styles.search}>
				<Search placeHolder={SEARCH_PLACEHOLDER} />
			</View>
			<View style={styles.options}>
				<OptionsContainer
					currencySymbol={CURRENCY_SYMBOL}
					addButtonTitle={ADD_BUTTON_MESSAGE}
					deleteAllButtonTitle={DELETE_ALL_BUTTON_MESSAGE}
					modalTitle={ADD_ITEMS_TITLE}
					acceptModalButtonTitle={ACCEPT_ADD_BUTTON_TITLE}
					cancelModalButtonTitle={CANCEL_ADD_BUTTON_TITLE}
				/>
			</View>
			<View style={styles.items}>
				<Items
					itemHeight={itemHeight}
					noItemsMessage={NO_ITEMS_MESSAGE}
					currencySymbol={CURRENCY_SYMBOL}
				/>
			</View>
		</View>
	);
};

export default SavedItems;
