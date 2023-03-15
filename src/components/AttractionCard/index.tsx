import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

type Props = {
  title: string;
  location: string;
  imageSrc: string;
  onPress: () => void;
};

const AttractionCard = ({title, location, imageSrc, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.locationContainer}>
        <Image
          style={styles.location}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCard);
