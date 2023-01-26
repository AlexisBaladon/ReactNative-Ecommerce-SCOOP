import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { ItemContextComponents } from '../../../context';
import Buttons from '../../global/buttons/options/buttons/buttons';

interface IProps {
	addButtonTitle: string;
	deleteAllButtonTitle: string;
	deleteAllAlertDescription: string;
	cancelButtonTitle: string;
}

const OptionsContainer: React.FC<IProps> = ({
	addButtonTitle,
	deleteAllButtonTitle,
	deleteAllAlertDescription,
	cancelButtonTitle,
}) => {
	const { ItemContext } = ItemContextComponents;
	const { deleteAllItems } = useContext(ItemContext);

	const onHandleDeleteAllItems = () => {
		Alert.alert(
			deleteAllButtonTitle,
			deleteAllAlertDescription, [
				{text: cancelButtonTitle, style: 'cancel'},
				{text: deleteAllButtonTitle, onPress: deleteAllItems},
			]
		)
	}

	type TButton = { title: string; onPress(): void };
	const buttons: Array<TButton> = [
		{ title: addButtonTitle, onPress: () => null },
		{ title: deleteAllButtonTitle, onPress: onHandleDeleteAllItems },
	];

	return (
		<>
			<Buttons buttons={buttons} />
		</>
	);
};

export default OptionsContainer;
