import React, { useContext, useState } from 'react'
import { ItemContextComponents } from '../../../context';
import Buttons from '../../global/buttons/options/buttons/buttons';
import CreatorModal from '../creatorModal/modal/creatorModal';

interface IProps {
  currencySymbol: string,
  addButtonTitle: string,
  deleteAllButtonTitle: string,
  modalTitle: string,
  acceptModalButtonTitle: string,
  cancelModalButtonTitle: string,
}

const OptionsContainer: React.FC<IProps> = ({
      currencySymbol, 
      addButtonTitle, 
      deleteAllButtonTitle,
      modalTitle,
      acceptModalButtonTitle,
      cancelModalButtonTitle
    }) => {

  const { ItemContext } = ItemContextComponents;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { deleteAllItems } = useContext(ItemContext);

  type TButton = {title: string, onPress(): void};
  const buttons: Array<TButton> = [
    {title: addButtonTitle, onPress: () => setModalVisible(true)},
    {title: deleteAllButtonTitle, onPress: () => deleteAllItems()},
  ]

  return (<>
    <CreatorModal 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible}
      currencySymbol={currencySymbol}
      modalTitle={modalTitle}
      acceptModalButtonTitle={acceptModalButtonTitle}
      cancelModalButtonTitle={cancelModalButtonTitle}
    />
    <Buttons buttons={buttons} />
   </>
  )
}

export default OptionsContainer;