import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  location: string;
  imageSrc: string;
};

const AttractionCard = ({title, location, imageSrc}: Props) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.locationContainer}>
        <Image
          style={styles.location}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{location}</Text>
      </View>
    </View>
  );
};

export default React.memo(AttractionCard);
