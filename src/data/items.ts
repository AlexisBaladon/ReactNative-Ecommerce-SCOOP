import { type DtItem } from '../interfaces';

const mockItems: DtItem[] = [
	{
		id: '1',
		title: 'Harry Potter',
		description: 'Este libro es sobre un chico que va a una escuela de magia',
		priceDollars: 100,
		imageURL: './books.jpg',
	},
	{
		id: '2',
		title: 'Pollo con arroz',
		description: 'Infaltable en tu dieta diaria',
		priceDollars: 200,
		imageURL: './food.jpg',
	},
	{
		id: '3',
		title: 'Botas',
		description: 'Un par de botas para la lluvia',
		priceDollars: 300,
		imageURL: './clothes.png',
	},
	{
		id: '4',
		title: 'Los juegos del hambre',
		description: 'Este libro es sobre la pelea por la supervivencia',
		priceDollars: 300,
		imageURL: './books.jpg',
	},
	{
		id: '5',
		title: 'Almohada',
		description: 'Para dormir bien y descansar',
		priceDollars: 300,
		imageURL: 'https://picsum.photos/200/300',
	},
];

export default mockItems;
