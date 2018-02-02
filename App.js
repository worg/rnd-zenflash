import React from 'react';
import { AppLoading, Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import Deck from './components/deck';
import Card from './components/card';
import Quiz from './components/quiz';

const Navigator = StackNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: { 
      title: 'Decks',
    }
  },
  Card: {
    screen: Card,
    navigationOptions: { 
      // title: 'Card',
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { 
      title: 'Quiz',
    }
  },
});

export default class App extends React.PureComponent {
  state = {
    hasFonts: false,
  };

  componentWillMount() {
    this.loadFonts();
  }

   async loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({
      hasFonts: true,
    });
  }

  render() {
    const { hasFonts } = this.state;
    return hasFonts ? <Navigator /> : <AppLoading />;
  }
}
