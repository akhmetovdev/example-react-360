import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-360';
import Counter from './components/Counter';

export default class example_react_360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('example_react_360', () => example_react_360);
