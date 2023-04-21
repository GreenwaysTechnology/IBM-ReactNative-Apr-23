import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

/////////////////////////////////////////////////////////////////////////////////////

//biz logic : reducer
const counterReducer = (state = { counter: 10 }, action) => {
  //switch case
  switch (action.type) {
    case 'counter/increment':
      return { ...state, counter: state.counter + 1 }
    default:
      return state;
  }
}

//create store object
const store = configureStore({
  reducer: {
    //counterReducer: counterReducer
    counterReducer
  }
})

const Counter = props => {
  // const [counter, setCounter] = useState(0)

  const counter = useSelector(state => {
    //state.reducerName.state
    return state.counterReducer.counter
  })
  const dispatch = useDispatch();
  const onIncrement = evt => {
    //send request 
    dispatch({ type: 'counter/increment' })
  }
  // const onIncrement = evt => {
  //   setCounter(counter + 1)
  // }
  return <View>
    <Text>Counter {counter}</Text>
    <Button title="Increment" onPress={onIncrement} />
  </View>
}


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <StatusBar style="auto" />
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
