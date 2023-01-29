import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TEXT } from '../../constants/index';
import { Buttons, Items } from '../../components';
import styles from './store.styles';
import { DtItem } from '../../interfaces';
import StoreItem from '../../components/items/storeItem/storeItem';

const {
	NO_ITEMS_MESSAGE,	
} = TEXT;

const mockItems: DtItem[] = [
	{
		id: "1",
		title: 'Harry Potter',
		description: 'Este libro es sobre un chico que va a una escuela de magia',
		priceDollars: 100,
		imageURL: './books.jpg',
		amount: 1,
	},
	{
		id: "2",
		title: 'Pollo con arroz',
		description: 'Necesito comprar pollo con arroz',
		priceDollars: 200,
		imageURL: './food.jpg',
		amount: 1,
	},
	{
		id: "3",
		title: 'Botas',
		description: 'Necesito comprar botas de forma urgente',
		priceDollars: 300,
		imageURL: './clothes.png',
		amount: 1,
	},
	{
		id: "4",
		title: 'Los juegos del hambre',
		description: 'Este libro es sobre la pelea por la supervivencia',
		priceDollars: 300,
		imageURL: './books.jpg',
		amount: 1,
	},
	{
		id: "5",
		title: 'Almohada',
		description: 'Necesito comprar varias almohada',
		priceDollars: 300,
		imageURL: 'https://picsum.photos/200/300',
		amount: 5,
	},
];

const StoreScreen: React.FC = () => {
	const [items, setItems] = useState<DtItem[]>([]);

	useEffect(() => {
	  setItems(mockItems);
	}, [])

	type TButton = { title: string; onPress(): void, pressed: boolean };
	const buttons: Array<TButton> = [
		{ title: 'Todos', onPress: () => {}, pressed: true },
	];

	const RenderItem: React.FC<{ item: DtItem }> = ({ item }) => {
		return (
			<View style={styles.item}>
				<StoreItem item={item} selling={true} />
			</View>
		);
	};

	return (<>
		<Buttons buttons={buttons} />
		<Items
			shownItems={items}
			noItemsMessage={NO_ITEMS_MESSAGE}
			RenderItem={RenderItem}
			numColumns={2}
		/>
	</>);
};

export default StoreScreen;
