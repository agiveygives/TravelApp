import type {StackScreenProps} from '@react-navigation/stack';
import type {NavigationProp, RouteProp} from '@react-navigation/native';

type AttractionType = {
  id: number;
  name: string;
  city: string;
  country: string;
  entry_price: string;
  address: string;
  opening_time: string;
  closing_time: string;
  categories: string[];
  images: string[];
  coordinates: {
    lat: number;
    lon: number;
  };
};

export type RootStackParamList = {
  Home: undefined;
  AttractionDetails: {item: AttractionType};
  Gallery: {images: string[]};
  Map: {
    coordinates: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    };
    name: string;
    city: string;
  };
};

interface ScreenProps<T extends keyof RootStackParamList>
  extends StackScreenProps<RootStackParamList, T>,
    NavigationProp<RootStackParamList>,
    RouteProp<RootStackParamList> {}

export default ScreenProps;
