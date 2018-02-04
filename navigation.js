import React from 'react';
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

export default Navigator;