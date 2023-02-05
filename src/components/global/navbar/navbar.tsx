import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

const iconsImages = [require('./home.png'), require('./cart.png'), require('./liked.png')];

interface IProps {
	chosenIcon: number;
	setChosenIcon: (chosenIcon: number) => void;
}

const Navbar: React.FC<IProps> = ({ chosenIcon, setChosenIcon }) => {
	return (
		<View style={styles.navbar}>
			{iconsImages.map((icon, i) => {
				const middleIconIndex = (iconsImages.length / 2) >> 0; //Rounds down to nearest integer
				const chosenIconStyle = i === chosenIcon ? styles.chosenIcon : {};
				const mainIconStyle = i === middleIconIndex ? styles.mainIcon : {};
				return (
					<TouchableWithoutFeedback onPress={() => setChosenIcon(i)} key={i}>
						<Image
							key={i}
							source={icon}
							style={[styles.icon, chosenIconStyle, mainIconStyle]}
						/>
					</TouchableWithoutFeedback>
				);
			})}
		</View>
	);
};

import { COLORS } from '../../../constants';

const iconWidth = 9;
const { MAIN_COLOR, NEUTRAL_COLOR } = COLORS;

const styles = StyleSheet.create({
	navbar: {
		width: '100%',
		height: 70,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		backgroundColor: 'white',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	mainIcon: {
		width: `${iconWidth * 1.4}%`,
	},
	icon: {
		tintColor: NEUTRAL_COLOR,
		width: `${iconWidth}%`,
		aspectRatio: 1,
	},
	chosenIcon: {
		tintColor: MAIN_COLOR,
	},
});

export default Navbar;
