import React from 'react';
import {Image, Text, View, ImageSourcePropType} from 'react-native';
import styles from './styles';

type Props = {
  icon: ImageSourcePropType;
  text: string;
};

const InfoCard = ({icon, text}: Props) => (
  <View style={styles.container}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

InfoCard.defaultProps = {
  text: 'Default text',
};

export default React.memo(InfoCard);
