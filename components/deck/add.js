import React from 'react';
import { connect } from 'react-redux';
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
import { addDeck } from '../../actions';

class AddDeck extends React.Component {
  state = {
    deckName: ''
  };

  handleChange = (deckName) => this.setState({ deckName });

  handleSubmit = () => {
    this.props.addDeck(this.state.deckName).then(result => {
      const deck = Object.values(result)[0];
      this.props.navigation.navigate('Card', { ...deck });
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ModalHeader
          onCancel={() => navigation.goBack()}
          title='Add Deck' />
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Name your deck</Label>
              <Input onChangeText={this.handleChange} />
            </Item>
          </Form>
          <Button
            primary
            onPress={this.handleSubmit}
            disabled={this.state.deckName === ''}
            style={{alignSelf: 'center', margin: 10}} >
            <Text>Add Deck</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


export default connect(null, { addDeck })(AddDeck);