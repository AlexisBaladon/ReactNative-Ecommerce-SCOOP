import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { CartItemContextComponents } from '../../../context';
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
	const { CartItemContext } = CartItemContextComponents;
	const { deleteAllItems } = useContext(CartItemContext);

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
