import React, { useContext, useState } from 'react'
import { ItemContext } from '../../context/itemContext';
import Buttons from './buttons';
import CreatorModal from './creatorModal';

interface IProps {
  currencySymbol: string,
  addButtonTitle: string,
  deleteAllButtonTitle: string,
  modalTitle: string,
  acceptModalButtonTitle: string,
  cancelModalButtonTitle: string,
}

const CategoriesContainer: React.FC<IProps> = ({
      currencySymbol, 
      addButtonTitle, 
      deleteAllButtonTitle,
      modalTitle,
      acceptModalButtonTitle,
      cancelModalButtonTitle
    }) => {
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

export default CategoriesContainer;