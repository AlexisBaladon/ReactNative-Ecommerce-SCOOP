import React, { useState } from 'react'
import { TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../../../constants/styles';
import { getItemImage, getItemImagesIds } from '../../../../helpers/imageHandler';
import styles from './imageSlider.styles';

interface IProps {
    imageUrlRef: React.MutableRefObject<string>;
}

const ImageSlider: React.FC<IProps> = ({imageUrlRef}) => {
    const imageUrls = getItemImagesIds();
    const imagesRequired = imageUrls.map((url) => getItemImage(url));
    const [imagesStyle, setImagesStyle] = useState<Array<StyleSheet | {}>>(Array(imageUrls.length).fill({}))

    const handleOnPress = (i: number) => {
        imageUrlRef.current = imageUrls[i];
        const newImagesStyle = Array(imageUrls.length).fill({opacity: 0.5})
        newImagesStyle[i] = StyleSheet.create({
            style: {
                borderColor: MAIN_COLOR,
                borderWidth: 3,
                opacity: 1,
                overflow: 'hidden',
            }
        }).style;
        setImagesStyle(newImagesStyle);
    }

    //React native doesn't allow the use of require inside a loop
    const images = imagesRequired.map((uri, i) => {
        return {
            id: imageUrls[i],
            img: <TouchableOpacity 
                    style={[styles.imageButton, imagesStyle[i]]}
                    onPress={() => handleOnPress(i)}
                 >
                <Image key={i} source={uri} style={styles.image}/>
            </TouchableOpacity>
        }
    });

  return (
    <FlatList 
        horizontal={true}
        data = {images}
        renderItem = {({item}) => item.img}
        keyExtractor ={item => item.id}
    />
  )
}

export default ImageSlider;