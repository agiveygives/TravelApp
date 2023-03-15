import React from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import ScreenProps, {RootStackParamList} from '../../types/stackNavigation';
import styles from './styles';

const Gallery = () => {
  const navigation = useNavigation<ScreenProps<'Gallery'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Gallery'>>();

  const images = route?.params?.images || [];

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={styles.imagesContainer}
          data={images}
          renderItem={({item}: {item: string}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
        />

        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
