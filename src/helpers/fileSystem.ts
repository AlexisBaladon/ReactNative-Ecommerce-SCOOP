import * as ImagePicker from 'expo-image-picker';

import * as FileSystem from 'expo-file-system';

import base64js from 'base64-js';

const getImageBytes = async (imageUri: string): Promise<Uint8Array | Error> => {
	try {
		const fileInfo = await FileSystem.getInfoAsync(imageUri);
		const { uri } = fileInfo;
		const base64 = await FileSystem.readAsStringAsync(uri, {
			encoding: FileSystem.EncodingType.Base64,
		});
		const bytes = base64js.toByteArray(base64);
		return bytes;
	} catch (error) {
		console.log('Error getting image bytes: ', error);
		return error as Error;
	}
};

export const verifyPermissions = async (): Promise<boolean> => {
	try {
		const { status } = await ImagePicker.getCameraPermissionsAsync();
		if (status !== 'granted') {
			return false;
		}
		return true;
	} catch {
		return false;
	}
};

export const takePicture = async (): Promise<string | Error | undefined> => {
	const hasPermissions = await verifyPermissions();
	if (!hasPermissions) {
		try {
			const { status } = await ImagePicker.requestCameraPermissionsAsync();
			if (status !== 'granted') {
				return new Error('No permissions');
			}
		} catch (error) {
			return error as Error;
		}
	}

	if (!hasPermissions) {
		return new Error('No permissions');
	}

	try {
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [9, 9],
			quality: 0.5,
		});
		const imageBytes = await getImageBytes(image.assets?.[0].uri ?? '');
		if (imageBytes instanceof Error) {
			return imageBytes;
		}
		const imageUri = getUriFromBytes(imageBytes);
		return imageUri;
	} catch (error) {
		return error as Error;
	}
};

export const getUriFromBytes = (bytes: Uint8Array): string => {
	const base64 = base64js.fromByteArray(bytes);
	const uri = `data:image/png;base64,${base64}`;
	return uri;
};
