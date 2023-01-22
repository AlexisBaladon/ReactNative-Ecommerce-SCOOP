import { ImageSourcePropType } from "react-native";
import itemImages from "../assets/items";

const DEFAULT_ID = './default.jpg';

const getItemImagesIds = () => {
    const itemImagesWithoutDefault = itemImages.filter(image => image.id !== DEFAULT_ID);
    return itemImagesWithoutDefault.map(image => image.id);
}

const getItemImage = (id: string) => {
    let foundItem = itemImages.find(image => image.id === id);
    if (!foundItem) foundItem = itemImages.find(image => image.id === DEFAULT_ID);
    if (!foundItem) throw new Error('No default image found');
    return foundItem.src;
}

export { getItemImagesIds, getItemImage };