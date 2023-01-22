import React, { useState } from 'react'
import DtItem from '../interfaces/item';

const ItemContext = React.createContext<{
    items: Array<DtItem>,
    setItems: (items: Array<DtItem>) => void,
    shownItems: Array<DtItem>,
    setShownItems: (items: Array<DtItem>) => void,
    deleteItem: (itemId: DtItem['id']) => void,
    addItem: (item: DtItem) => void,
    deleteAllItems: () => void,
  }>(
  {
    items: [],
    setItems: (items: Array<DtItem>) => {},
    shownItems: [],
    setShownItems: (items: Array<DtItem>) => {},
    deleteItem: (itemId: DtItem['id']) => {},
    addItem: (item: DtItem) => {},
    deleteAllItems: () => {},
  });

const ItemContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [items, setItems] = useState<Array<DtItem>>([]);
    const [shownItems, setShownItems] = useState<Array<DtItem>>([]);

    const deleteItem = (itemId: DtItem['id']) => {
        const itemsWithoutDeleted = items.filter(item => item.id != itemId);
        const shownItemsWithoutDeleted = shownItems.filter(item => item.id != itemId);
        setItems(itemsWithoutDeleted);
        setShownItems(shownItemsWithoutDeleted);
    }

    const addItem = (item: DtItem) => {
        const newItems = [...items, item];
        const newShownItems = [...shownItems, item];
        setItems(newItems);
        setShownItems(newShownItems);
    }

    const deleteAllItems = () => {
        setItems([]);
        setShownItems([]);
    }

  return (
    <ItemContext.Provider 
      value={{
        items: items,
        setItems: setItems,
        shownItems: shownItems,
        setShownItems: setShownItems,
        deleteItem: deleteItem,
        addItem: addItem,
        deleteAllItems: deleteAllItems,
      }}>
      {children}
    </ItemContext.Provider>
  )
}

export {ItemContextProvider,ItemContext}