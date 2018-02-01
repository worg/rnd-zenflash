import React from 'react';
import { Text } from 'react-native';

const Quiz = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.goBack()}>Quiz</Text>
  );
};

export default Quiz;