import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react'
import { Text } from 'react-native'
import { Navbar } from '../../components';
import { RootStackParamList } from '../../navigation/types';

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenNavigationProp> = ({route, navigation}) => {
    return (<>
        <Text>ItemDetail</Text>
        <Navbar 
			chosenIcon={0} 
			setChosenIcon={(index: number) => {
					const pages: (keyof RootStackParamList)[] = ['Store', 'Cart', 'Favourites'];
					const names = ['Tienda', 'Carrito', 'Favoritos'];
					return navigation.navigate(pages[index], {
						name: names[index],
					});
				}
			}
		/>
    </>
    )
}

export default DetailScreen;   