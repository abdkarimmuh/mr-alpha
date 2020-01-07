import { Dimensions } from 'react-native';

const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const DEVICE_HEIGHT = Math.round(Dimensions.get('window').height);
const HeightCarousel = DEVICE_WIDTH / 2;
const ItemDonation = DEVICE_WIDTH / 4;

export default {
	DEVICE_WIDTH,
	DEVICE_HEIGHT,
	HeightCarousel,
	ItemDonation,
};
