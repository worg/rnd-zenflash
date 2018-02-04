import React from 'react';
import { connect } from 'react-redux';
import {
  Container, 
  Content, 
  List, 
  ListItem,
  Text,
} from 'native-base';
import AddButton from '../common/add';
export AddDeck from './add';

class DeckList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <AddButton onPress={() => navigation.navigate('AddDeck')} />
    ),
  });

  toDeck = (deck) => () => {
    this.props.navigation.navigate('Card', { ...deck });
  }

  render() {
    const { decks } = this.props;
    return (
      <Container>
        <Content>
          <List
            button
            renderRow={d => (
              <ListItem onPress={this.toDeck(d)}>
                <Text>{d.title}</Text>
              </ListItem>
            )}
            dataArray={Object.values(decks)} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ decks: state });

export default connect(mapStateToProps)(DeckList);
