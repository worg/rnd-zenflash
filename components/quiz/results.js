import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  H2,
  H3,
  View,
  Text,
} from 'native-base';

const Results = ({ correct, total, onReset, onExit }) => {
  return (
    <View>
      <H2 style={style.heading}>
        You got {correct} correct answers out of {total}
      </H2>
      <H3 style={[style.heading, style.subheading]}>
        That's {(correct * 100) / total}% correct answers
      </H3>
      <View style={style.actionButtons}>
        <Button
          style={style.button}
          onPress={onExit}
          primary
          bordered>
          <Text>Back to deck</Text>
        </Button>
        <Button
          style={style.button}
          onPress={onReset}
          primary>
          <Text>Restart Quiz</Text>
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    textAlign: 'center',
  },
  subheading: {
    opacity: .8,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    margin: 10,
  }
 });

export default Results;