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
import { addDeck } from '../../actions';

class AddDeck extends React.Component {
  state = {
    deckName: ''
  };

  handleChange = (deckName) => this.setState({ deckName });

  handleSubmit = () => {
    this.props.addDeck(this.state.deckName).then(() => {
      this.props.navigation.goBack();
    });
  };

  render() {
    return (
      <Container>
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