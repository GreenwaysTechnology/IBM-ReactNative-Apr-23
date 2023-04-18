import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//create Stack Object
const Stack = createNativeStackNavigator();

const Home = () => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}
const Profile = () => {
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
}


export default function App() {
    return <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    </NavigationContainer>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});