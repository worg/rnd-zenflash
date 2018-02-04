import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';
import Navigator from './navigation';
import store from './store';
import { hydrate } from './actions';

export default class App extends React.PureComponent {
  state = {
    hasFonts: false,
  };

  componentWillMount() {
    this.loadFonts();
    // Hydrate store from async storage
    hydrate(store.dispatch);
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
        {!hasFonts ? <AppLoading /> : <Navigator />}
      </Provider>
    );
  }
}
