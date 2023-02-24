import type { ImageSourcePropType } from 'react-native';
import { images } from '../assets/';

const DEFAULT_ID = './default.png';

const { itemImages } = images;

const getItemImagesIds = (): string[] => {
	const itemImagesWithoutDefault = itemImages.filter((image) => image.id !== DEFAULT_ID);
	return itemImagesWithoutDefault.map((image) => image.id);
};

const getItemImage = (id: string): ImageSourcePropType | undefined => {
	const foundItem = itemImages.find((image) => image.id === id);
	if (foundItem == null) return { uri: id };
	return foundItem.src;
};

const getDefaultImage = (): ImageSourcePropType => {
	const defaultImage = itemImages.find((image) => image.id === DEFAULT_ID) as { src: ImageSourcePropType };
	return defaultImage.src;
};

const ImageHandler = {
	getItemImagesIds,
	getItemImage,
	getDefaultImage,
};

export default ImageHandler;
