import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Deck, { AddDeck } from './components/deck';
import Card, { AddCard } from './components/card';
import Quiz from './components/quiz';
import theme from './native-base-theme/variables/platform';

const commonNavStyle = {
  cardStyle: {
    backgroundColor: theme.toolbarDefaultBorder,
  },
};

const commonNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : theme.toolbarDefaultBg,
  },
  headerTitleStyle: {
    color: theme.toolbarBtnTextColor,
  },
  headerBackTitleStyle: {
    color: '#607d8b',
  },
  headerTintColor: '#607d8b',
};

const Navigator = StackNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: { 
      title: 'Decks',
      ...commonNavOptions,
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      ...commonNavOptions,
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { 
      title: 'Quiz',
      ...commonNavOptions,
    }
  },
}, {
  cardStyle: {
    backgroundColor: theme.toolbarDefaultBorder,
  },
});

const RootNavigation = StackNavigator({
  Main: { screen: Navigator },
  AddDeck: {
    screen: AddDeck,
  },
  AddCard: {
    screen: AddCard,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  ...commonNavStyle,
});

export default RootNavigation;