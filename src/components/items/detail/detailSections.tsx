import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ImageHandler } from '../../../helpers';
import Buttons from '../../global/buttons/options/buttons/buttons';
import CustomText from '../../global/customText/customText';
import styles from './detailSections.styles';

interface IProps {
	categoryTitle: string;
	categories: string[];
	recommendedTitle: string;
	imagesIds: string[];
}

const DetailSections: React.FC<IProps> = ({
	categoryTitle,
	categories,
	recommendedTitle,
	imagesIds,
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
				data={imagesIds}
				contentContainerStyle={styles.recommendedContainer}
				style={styles.recommended}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<Image
							source={ImageHandler.getItemImage(item)}
							style={styles.recommendedImage}
						/>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item}
				horizontal={true}
			/>
		</>
	);
};

export default DetailSections;
