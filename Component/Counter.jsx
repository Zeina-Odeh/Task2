import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function Counter({ Increment, Decrement, counterName }) {
  const [counterValue, setCounterValue] = useState(0);

  const setIncrement = () => {
    setCounterValue(counterValue + 1);
    Increment();
  };

  const setDecrement = () => {
    setCounterValue(counterValue - 1);
    Decrement();
  };

  const counterStyle = {
    borderWidth: 3,
    borderColor: '#c4f6',
    padding: 25,
    margin: 15,
    width: 160,
    alignItems: 'center', 
  };

  const buttonRowStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  const buttonStyle = {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4f6',
  };

  const valueStyle = {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
  };

  return (
    <View style={counterStyle}>
      <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: 'bold' }}>{counterName}</Text>
      <View style={buttonRowStyle}>
        <TouchableOpacity onPress={setDecrement} style={buttonStyle}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={valueStyle}>{counterValue}</Text>
        <TouchableOpacity onPress={setIncrement} style={buttonStyle}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Counter;
