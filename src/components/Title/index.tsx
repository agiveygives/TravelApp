import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  style?: Record<string | symbol, string | number>;
};

const Title = ({text, style}: Props) => (
  <Text style={[styles.title, style]}>{text}</Text>
);

Title.defaultProps = {
  text: 'Default text',
};

export default React.memo(Title);
