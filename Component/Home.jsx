import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Counter from './Counter';

function Home() {
  const [total, setTotal] = useState(0);

  const updateTotal = (change) => {
    setTotal(total + change);
  };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Counter counterName="Counter 1" Decrement={() => updateTotal(-1)} Increment={() => updateTotal(1)} />
        <Counter counterName="Counter 2" Decrement={() => updateTotal(-1)} Increment={() => updateTotal(1)} />
        <Counter counterName="Counter 3" Decrement={() => updateTotal(-1)} Increment={() => updateTotal(1)} />
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total: {total}</Text>
      </View>
    </View>
  );
}

export default Home;
