import React from 'react';
import { Text } from 'react-native';

const Card = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate('Quiz')}>Card</Text>
  );
};

export default Card;