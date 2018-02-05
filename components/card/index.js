import React from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  H1,
  H2,
  View,
  Text,
} from 'native-base';
import AddButton from '../common/add';
export AddCard from './add';

const isAndroid = Platform.OS !== 'ios';

class Card extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.state.params.title,
    headerRight: (
      <AddButton onPress={() => navigation.navigate('AddCard', { 
        id: navigation.state.params.id,
      })} />
    ),
  });

  startQuiz = () => {
    const { deck } = this.props;
    this.props.navigation.navigate('Quiz', { ...deck });
  }

  render() {
    const { deck } = this.props;
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
              primary
              elevation={3}
              rounded={!isAndroid}
              disabled={count < 1}
              delayPressIn={0}
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

const mapStateToProps = (state, ownProps) => {
  const deck = ownProps.navigation.state.params;
  return { deck: state[deck.id] };
};

export default connect(mapStateToProps)(Card);
