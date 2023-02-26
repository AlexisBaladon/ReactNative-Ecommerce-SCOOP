import * as Network from 'expo-network';

export const hasConnection = async (): Promise<boolean> => {
    const { isConnected } = await Network.getNetworkStateAsync();
    const hasInternet = isConnected !== undefined ? isConnected : false;
    return hasInternet;
}