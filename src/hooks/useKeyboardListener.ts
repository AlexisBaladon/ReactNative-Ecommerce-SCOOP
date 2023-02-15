import { useEffect } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardListener = (
	onKeyboardDidShow: () => void,
	onKeyboardDidHide: () => void,
): void => {
	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);
};

export default useKeyboardListener;
