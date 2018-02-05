import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {
  Container, 
  Content, 
  List, 
  ListItem,
  Text,
  Body,
  Badge,
  Right,
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
        <StatusBar barStyle='light-content' />
        <Content>
          <List
            button
            renderRow={d => (
              <ListItem onPress={this.toDeck(d)}>
                <Body>
                  <Text>{d.title}</Text>
                </Body>
                <Right>
                  <Badge info>
                    <Text style={{fontSize: 13}}>
                      {d.questions.length} cards
                    </Text>
                  </Badge>
                </Right>
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
