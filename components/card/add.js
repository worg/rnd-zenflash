import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
} from 'native-base';
import ModalHeader from '../common/header';
import { addQuestion } from '../../actions';

class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  handleChangeQuestion = (question) => this.setState({ question });

  handleChangeAnswer = (answer) => this.setState({ answer });

  handleSubmit = () => {
    const deck = this.props.navigation.state.params;
    const { question, answer } = this.state;
    this.props.addQuestion(deck.id, question, answer).then(() => {
      this.props.navigation.goBack();
    });
  };

  render() {
    const { navigation } = this.props;
    const { question, answer } = this.state;
    return (
      <Container>
        <ModalHeader
          onCancel={() => navigation.goBack()}
          title='Add Card' />
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Question</Label>
              <Input onChangeText={this.handleChangeQuestion} />
            </Item>
            <Item floatingLabel>
              <Label>Answer</Label>
              <Input onChangeText={this.handleChangeAnswer} />
            </Item>
          </Form>
          <Button
            primary
            onPress={this.handleSubmit}
            disabled={question === '' || answer === ''}
            style={styles.button} >
            <Text>Add Question</Text>
          </Button>
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    margin: 10,
  },
});


export default connect(null, { addQuestion })(AddCard);