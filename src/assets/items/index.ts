import { ImageSourcePropType } from "react-native";

interface ItemImage {
     id: string;
     src: ImageSourcePropType | undefined;
}

const itemImages: Array<ItemImage> = [
     {id: './default.jpg', src: require('./default.jpg')},
     {id: './books.jpg', src: require('./books.jpg')},
     {id: './clothes.png', src: require('./clothes.jpg')},
     {id: './food.jpg', src: require('./food.jpg')},
]


export default itemImages;