import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

//Like Feature : 
const LikeReducer = (state = { like: 10 }, action) => {
    //switch case
    switch (action.type) {
        case 'like/increment':
            return { ...state, like: state.like + 1 }
        default:
            return state;
    }
}
//Dislike Reducer
const DislikeReducer = (state = { dislike: 10 }, action) => {
    //switch case
    switch (action.type) {
        case 'like/decrement':
            return { ...state, like: state.dislike + 1 }
        default:
            return state;
    }
}

//create store object
const store = configureStore({
    reducer: {
        //counterReducer: counterReducer
        counterReducer,
        LikeReducer,
        DislikeReducer
    }
})

const Counter = props => {
    const counter = useSelector(state => {
        return state.counterReducer.counter
    })
    const dispatch = useDispatch();
    const onIncrement = evt => {
        //send request 
        dispatch({ type: 'counter/increment' })
    }

    return <View>
        <Text>Counter {counter}</Text>
        <Button title="Increment" onPress={onIncrement} />
    </View>
}
const Like = props => {
    const myLike = useSelector(state => {
        return state.LikeReducer.like
    })
    const dispatch = useDispatch();
    const onIncrement = evt => {
        //send request 
        dispatch({ type: 'like/increment' })
    }

    return <View>
        <Text>Like {myLike}</Text>
        <Button title="Like" onPress={onIncrement} />
    </View>
}
const DisLike = props => {
    const myDislike = useSelector(state => {
        return state.DislikeReducer.dislike
    })
    const dispatch = useDispatch();
    const onIncrement = evt => {
        //send request 
        dispatch({ type: 'like/dislike' })
    }

    return <View>
        <Text>Dislike {myDislike}</Text>
        <Button title="Dislike" onPress={onIncrement} />
    </View>
}

const HomeScreen = props => {
    return <View style={styles.container}>
        <Button title="Counter" onPress={() => {
            props.navigation.navigate('Counter')

        }} />
        <Button title="Like" onPress={() => {
            props.navigation.navigate('Like')

        }} /> 
        <Button title="Dislike" onPress={() => {
            props.navigation.navigate('Dislike')

        }} />
    </View>
}
const CounterScreen = props => {
    return <View style={styles.container}>
        <Counter />
    </View>
}
const LikeScreen = props => {
    return <View style={styles.container}>
        <Like />
    </View>
}
const DisLikeScreen = props => {
    return <View style={styles.container}>
        <DisLike />
    </View>
}


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Redux App' }}
                    />
                    <Stack.Screen
                        name="Counter"
                        component={CounterScreen}
                        options={{ title: 'Counter' }}
                    />
                    <Stack.Screen
                        name="Like"
                        component={LikeScreen}
                        options={{ title: 'Like' }}
                    />
                    <Stack.Screen
                        name="Dislike"
                        component={DisLikeScreen}
                        options={{ title: 'Dislike' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <StatusBar style="auto" /> */}
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
