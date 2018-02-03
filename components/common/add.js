import React from 'react';
import { Platform } from 'react-native';
import { Button, Icon } from 'native-base';

const iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-add`;

const Add = (props) => {
  return (
    <Button
      small
      transparent
      primary
      {...props} >
      <Icon name={iconName}  fontSize={28} />
    </Button>
  );
};

export default Add;