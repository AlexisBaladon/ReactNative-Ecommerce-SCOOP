import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ImageHandler } from '../../../helpers';
import type { DtItem } from '../../../interfaces';
import Buttons from '../../global/buttons/options/buttons/buttons';
import CustomText from '../../global/customText/customText';
import styles from './detailSections.styles';

interface IProps {
	categoryTitle: string;
	categories: string[];
	recommendedTitle: string;
	similarItems: DtItem[];
	handleOnPressItem: (item: DtItem) => void;
}

const DetailSections: React.FC<IProps> = ({
	categoryTitle,
	categories,
	recommendedTitle,
	similarItems,
	handleOnPressItem,
}) => {
	const buttons = categories.map((category) => ({
		title: category,
		onPress: () => {},
		pressed: false,
		...styles.buttonColors,
	}));

	return (
		<>
			<CustomText textType="bold" size="medium">
				{categoryTitle}
			</CustomText>
			<View style={styles.tagsContainer}>
				<Buttons buttons={buttons} />
			</View>
			<CustomText textType="bold" size="medium" style={styles.recommendedTitle}>
				{recommendedTitle}
			</CustomText>
			<FlatList
				data={similarItems}
				contentContainerStyle={styles.recommendedContainer}
				style={styles.recommended}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => {handleOnPressItem(item)}}>
						<Image
							source={ImageHandler.getItemImage(item.pictureUrl)}
							style={styles.recommendedImage}
						/>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
				horizontal={true}
			/>
		</>
	);
};

export default DetailSections;
