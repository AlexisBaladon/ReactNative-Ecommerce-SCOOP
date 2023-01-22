import React, { useContext, useState } from 'react'
import { ItemContext } from '../../context/itemContext';
import Buttons from './buttons';
import CreatorModal from './creatorModal';

const CategoriesContainer = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { deleteAllItems } = useContext(ItemContext);

  type TButton = {title: string, onPress(): void};
  const buttons: Array<TButton> = [
    {title: 'Agregar', onPress: () => setModalVisible(true)},
    {title: 'Borrar todo', onPress: () => deleteAllItems()},
  ]

  return (<>
    <CreatorModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    <Buttons buttons={buttons} />
   </>
  )
}

export default CategoriesContainer;