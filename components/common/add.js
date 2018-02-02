import React from 'react';
import { Platform } from 'react-native';
import { Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const Add = (props) => {
  const iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-add-circle`;
  return (
    <Button small transparent {...props} >
      <Ionicons style={{margin: 3}} name={iconName}  size={28} />
    </Button>
  );
};

export default Add;