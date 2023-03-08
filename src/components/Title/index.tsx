import React, {useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  const [title, setTitle] = useState<string>(text);

  const pressHandler = () => {
    setTitle('clicked the title');
  };

  return (
    <Text onPress={pressHandler} style={styles.title}>
      {title}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Default text',
};

export default React.memo(Title);
