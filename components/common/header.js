import React from 'react';
import {
  Body,
  Button,
  Header,
  Left,
  Right,
  Title,
  Text,
} from 'native-base';


const ModalHeader = ({ onCancel, title }) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          danger
          onPress={onCancel}>
          <Text>Cancel</Text>
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default ModalHeader;