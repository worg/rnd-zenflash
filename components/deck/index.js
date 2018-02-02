import React from 'react';
import {
  Container, 
  Content, 
  List, 
  ListItem,
  Text,
} from 'native-base';
import AddButton from '../common/add';
import { listDecks } from '../../utils/api';


export default class Deck extends React.Component {
  state = {
    decks: null,
  };

  static navigationOptions = {
    headerRight: (
      <AddButton />
    ),
  };

  componentWillMount() {
    listDecks().then(decks => this.setState({
      decks,
    }));
  }

  toDeck = (deck) => () => {
    this.props.navigation.navigate('Card', { deck });
  }

  render() {
    const decks = this.state.decks || {};
    return (
      <Container>
        <Content>
          <List
            renderRow={d => (
              <ListItem button onPress={this.toDeck(d)}>
                <Text>{d.title}</Text>
              </ListItem>
            )}
            dataArray={Object.values(decks)} />
        </Content>
      </Container>
    )
  }
}
