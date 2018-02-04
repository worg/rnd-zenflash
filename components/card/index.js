import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  H1,
  H2,
  View,
  Text,
} from 'native-base';

export default class Card extends React.Component {
  static navigationOptions = ({ navigation: { state } }) => ({
    headerTitle: state.params.title,
  });

  addCard = () => {
    const deck = this.props.navigation.state.params;
    this.props.navigation.navigate('AddCard', { id:  deck.id });
  };

  startQuiz = () => {
    const deck = this.props.navigation.state.params;
    this.props.navigation.navigate('Quiz', { ...deck });
  }

  render() {
    const deck = this.props.navigation.state.params;
    const count = deck.questions.length;
    return (
      <Container>
        <Content padder contentContainerStyle={styles.container}>
          <H1 style={styles.heading}>
            {deck.title}
          </H1>
          <H2 style={styles.count}>
            {count} cards
          </H2>
          <View style={styles.buttonContainer}>
            <Button
              block
              bordered
              rounded
              onPress={this.addCard}
              style={styles.button}>
              <Text>Add Card</Text>
            </Button>
            <Button
              block
              primary
              rounded
              disabled={count < 1}
              onPress={this.startQuiz}
              style={styles.button}>
              <Text>Start Quiz</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    margin: 30,
  },
  count: {
    margin: 20,
    opacity: .8
  },
  buttonContainer: {
    margin: 30,
    minWidth: 300,
  },
  button: {
    margin: 10,
  }
});
