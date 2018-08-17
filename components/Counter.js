import React, { Component } from 'react';
import { StyleSheet, View, VrButton, Text } from 'react-360';

class Counter extends Component {
  state = {
    counter: 0
  };

  handlePlusClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleMinusClick = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  render() {
    const { counter } = this.state;

    return (
      <View>
        <Text style={styles.text}>Clicked: {counter} times</Text>
        <View style={styles.buttons}>
          <VrButton style={styles.button} onClick={this.handleMinusClick}>
            <Text style={styles.buttonText}>-</Text>
          </VrButton>
          <VrButton style={styles.button} onClick={this.handlePlusClick}>
            <Text style={styles.buttonText}>+</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 100
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 100,
    height: 48,
    marginLeft: 36,
    marginRight: 36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    lineHeight: 48,
    fontSize: 48
  }
});

export default Counter;
