import React from 'react';
import { Text, View } from 'react-native';

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View >
        <Text onPress={() => navigation.navigate('Card')}>LOL</Text>
      </View>
    );
  }
}
