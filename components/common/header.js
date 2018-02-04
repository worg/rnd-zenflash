import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {
  Body,
  Button,
  Header,
  Left,
  Right,
  Title,
  Text,
} from 'native-base';

const isAndroid = Platform.OS !== 'ios';

const ModalHeader = ({ onCancel, title }) => {
  return (
    <Header style={style.header}>
        <Left>
          {!isAndroid && (
            <Button
              danger
              transparent
              onPress={onCancel}>
              <Text>Cancel</Text>
            </Button>
          )}
        </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {isAndroid && (
          <Button
            delayPressIn={0}
            danger
            small
            onPress={onCancel}>
            <Text pointerEvents='box-only'>Cancel</Text>
          </Button>
        )}
      </Right>
    </Header>
  )
};

const style = StyleSheet.create({
  header: Platform.select({
    android: {
      marginTop: Constants.statusBarHeight,
    },
    ios: {},
  }),
});

export default ModalHeader;