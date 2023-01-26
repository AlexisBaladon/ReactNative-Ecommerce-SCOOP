import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { ItemContextComponents } from '../../../context';
import Buttons from '../../global/buttons/options/buttons/buttons';
import CreatorModal from '../creatorModal/modal/creatorModal';

interface IProps {
	currencySymbol: string;
	addButtonTitle: string;
	deleteAllButtonTitle: string;
	deleteAllAlertDescription: string;
	modalTitle: string;
	acceptModalButtonTitle: string;
	cancelButtonTitle: string;
}

const OptionsContainer: React.FC<IProps> = ({
	currencySymbol,
	addButtonTitle,
	deleteAllButtonTitle,
	deleteAllAlertDescription,
	modalTitle,
	acceptModalButtonTitle,
	cancelButtonTitle,
}) => {
	const { ItemContext } = ItemContextComponents;
	const [modalVisible, setModalVisible] = useState<boolean>(false);
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
		{ title: addButtonTitle, onPress: () => setModalVisible(true) },
		{ title: deleteAllButtonTitle, onPress: onHandleDeleteAllItems },
	];

	return (
		<>
			<CreatorModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				currencySymbol={currencySymbol}
				modalTitle={modalTitle}
				acceptModalButtonTitle={acceptModalButtonTitle}
				cancelModalButtonTitle={cancelButtonTitle}
			/>
			<Buttons buttons={buttons} />
		</>
	);
};

export default OptionsContainer;
