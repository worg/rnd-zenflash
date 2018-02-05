import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';
import { StyleProvider } from 'native-base';
import Navigator from './navigation';
import store from './store';
import { hydrate } from './actions';
import { setLocalNotification } from './utils/notifications';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

export default class App extends React.PureComponent {
  state = {
    hasFonts: false,
  };

  componentWillMount() {
    this.loadFonts();
    // Hydrate store from async storage
    hydrate(store.dispatch);
    setLocalNotification();
  }

  async loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({
      hasFonts: true,
    });
  }

  render() {
    const { hasFonts } = this.state;
    return (
      <Provider store={store}>
        {!hasFonts ? <AppLoading /> : (
          <StyleProvider style={getTheme(platform)}>
            <Navigator />
          </StyleProvider>
        )}
      </Provider>
    );
  }
}
