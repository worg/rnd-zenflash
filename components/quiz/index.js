import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Body,
  Container,
  Icon,
  View,
  Card,
  CardItem,
  DeckSwiper,
  Text,
  H2,
  H3,
} from 'native-base';
import FlipCard from 'react-native-flip-card';
import ResultsView from './results';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../utils/notifications';

export default class QuizView extends React.Component {
  static navigationOptions = ({ navigation: { state } }) => ({
    title: state.params.title || '…',
  })

  _initialState = {
    restart: false,
    correct: 0,
    current: 1,
    completed: false,
  }

  constructor(props) {
    super(props);
    this.state = this._initialState;
  }

  onReset = () => {
    this.onComplete();
    this.setState(s => ({
      restart: true,
    }), () => this.setState(this._initialState));
  }

  onExit = () => {
    this.onComplete();
    this.props.navigation.goBack();
  }

  handleCorrect = () => {
    const deck = this.props.navigation.state.params;
    const isCurrent = this.state.current === deck.questions.length;

    this.setState(s => ({
      correct: s.correct + 1,
      current: !isCurrent ? s.current + 1 : s.current,
      completed: isCurrent,
    }));
  }

  handleIncorrect = () => {
    const deck = this.props.navigation.state.params;
    const isCurrent = this.state.current === deck.questions.length;

    this.setState(s => ({
      current: !isCurrent ? s.current + 1 : s.current,
      completed: isCurrent,
    }));
  }

  handleFlip = () => {
    if(!this._flipper){
      return;
    }

    // Very quirky/hacky way to flip the component
    this._flipper
      .__proto__
      ._toggleCard
      .call(this._flipper);
  }

  swipeRight = () => {
    this._swiper._root.swipeRight();
    this.handleCorrect();
  }

  swipeLeft = () => {
    this._swiper._root.swipeLeft();
    this.handleIncorrect();
  }

  onComplete = () => {
    // reschedule reminder
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const deck = this.props.navigation.state.params;
    const questions = deck.questions;

    return (
      <Container>
        <View style={style.root}>
          <View style={style.container}>
            <H2>{deck.title}</H2>
            <H3 style={style.subheading}>{this.state.current}/{questions.length}</H3>
          </View>
          <View style={style.cardContainer}>
            {!this.state.restart && (
            <DeckSwiper
              looping={false}
              ref={_e => this._swiper = _e}
              renderEmpty={() => (
                <ResultsView
                  onReset={this.onReset}
                  onExit={this.onExit}
                  correct={this.state.correct}
                  total={questions.length} />
              )}
              renderItem={(i) => (
                <Card>
                  <CardItem cardBody style={style.card}>
                    <Body style={style.card}>
                      <FlipCard
                        ref={_e => this._flipper = _e}
                        perspective={1e3}
                        style={style.cardFace}>
                        <H2 style={style.cardText}>{i.question}</H2>
                        <View style={[style.cardFace, { alignSelf: 'flex-start' }]}>
                          <H2 style={style.cardText}>{i.answer}</H2>
                        </View>
                      </FlipCard>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text note>Tap to show the answer, swipe to choose</Text>
                  </CardItem>
                </Card>
              )}
              onSwipeRight={this.handleCorrect}
              onSwipeLeft={this.handleIncorrect}
              dataSource={questions} />
            )}
          </View>
        </View>
        {!this.state.completed && (
          <View style={style.actionButtons}>
            <Button
              iconLeft
              onPress={this.swipeLeft}
              danger>
              <Icon name='arrow-back'/>
              <Text>Incorrect</Text>
            </Button>
            <Button onPress={this.handleFlip}>
              <Text>Flip card</Text>
            </Button>
            <Button
              iconRight
              onPress={this.swipeRight}
              success>
              <Text>Correct</Text>
              <Icon name='arrow-forward'/>
            </Button>
          </View>
        )}
      </Container>
    );
  }
}

const style = StyleSheet.create({
  root: {
    padding: 5,
  },
  container: {
    alignItems: 'center',
  },
  subheading: {
    opacity: .6,
    margin: 10,
  },
  cardContainer: {
    padding: 10,
    minHeight: 320,
  },
  card: {
    elevation: 3,
    alignItems: 'center',
    height: 250,
  },
  cardFace: {
    minWidth: 300,
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardText: {
    textAlign: 'center',
  },
  actionButtons:  {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    padding: 0,
    paddingTop: 15,
   },
});
