import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import ScreenProps, {RootStackParamList} from '../../types/stackNavigation';
import styles from './styles';

const Map = () => {
  const navigation = useNavigation<ScreenProps<'Map'>>();
  const {params} = useRoute<RouteProp<RootStackParamList, 'Map'>>();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={params.coordinates}>
        <Marker coordinate={params.coordinates} title={params.name} />
      </MapView>

      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{`${params.name}, ${params.city}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(Map);
