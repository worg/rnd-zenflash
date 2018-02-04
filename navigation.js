import { StackNavigator } from 'react-navigation';
import Deck, { AddDeck } from './components/deck';
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
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { 
      title: 'Quiz',
    }
  },
});

const RootNavigation = StackNavigator({
  Main: { screen: Navigator },
  AddDeck: {
    screen: AddDeck,
  },
  AddCard: {
    screen: AddDeck,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigation;