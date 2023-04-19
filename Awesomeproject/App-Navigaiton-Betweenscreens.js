import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create Stack Object
const Stack = createNativeStackNavigator();

const Home = (props) => {
    console.log(props)
    const { navigation: { navigate } } = props
    const moveToProfile = evt => {
        Alert.alert('moving screen')
        //logic to move from this screen to next screen.
        // props.navigation.navigate('Profile')
        //  navigation.navigate('Profile')
        navigate('Profile')
    }

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        {/* <Button title="Profile" onPress={moveToProfile} /> */}
        <Button title="Profile" onPress={() => navigate('Profile')} />
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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
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