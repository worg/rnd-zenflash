import React from 'react';
import { Platform,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base';

const isAndroid = Platform.OS !== 'ios';
const iconName = `${ !isAndroid ? 'ios' : 'md'}-add`;
const Touchable = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const Add = (props) => {
  return (
    <Touchable
      background={isAndroid && TouchableNativeFeedback.Ripple('rgba(0,0,0,.3)', true)}
      {...props} >
      <View style={styles.button}>
        <Icon
          style={{color: '#007AFF'}}
          name={iconName}
          fontSize={28} />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
   button: {
    marginRight: 10,
    padding: 4,
  }
});

export default Add;