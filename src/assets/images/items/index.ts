import { type ImageSourcePropType } from 'react-native';

interface ItemImage {
	id: string;
	src: ImageSourcePropType | undefined;
}

const itemImages: ItemImage[] = [{ id: './default.png', src: require('./default.png') }];

export default itemImages;
