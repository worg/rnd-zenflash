import React from 'react';
import { Text } from 'react-native';

export default class Card extends React.Component {
  static navigationOptions = ({ navigation: { state } }) => ({
    title: state.params.deck.title,
  })

  render() {
    const { navigation } = this.props;
    return (
      <Text onPress={() => navigation.navigate('Quiz')}>{JSON.stringify(navigation)}</Text>
    );
  }
}
