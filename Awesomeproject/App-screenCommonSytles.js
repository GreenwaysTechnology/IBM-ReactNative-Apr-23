import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create Stack Object
const Stack = createNativeStackNavigator();

const Home = (props) => {
    const { navigation: { navigate } } = props
    const moveToProfile = evt => {
        Alert.alert('moving screen')
        //logic to move from this screen to next screen.
        // props.navigation.navigate('Profile')
        //  navigation.navigate('Profile')
        navigate('Profile')
    }

    const profile = {
        id: 1,
        name: 'Subramanian Murugan',
    }

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        {/* <Button title="Profile" onPress={moveToProfile} /> */}
        {/* <Button title="Profile" onPress={() => navigate('Profile', { id: 1, name: 'Subramanian' })} /> */}
        {/* <Button title="Profile" onPress={() => navigate('Profile', { profile })} /> */}
        <Button style={{ marginTop: 10 }} title="Profile" onPress={() => navigate('Profile')} />

        <Button style={{ marginTop: 10 }} title="Profile" onPress={() => navigate('Profile', { profile })} />
    </View>
}
const Profile = props => {
    const { navigation: { goBack }, route: { params } } = props
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{params.profile.id} {params.profile.name}</Text>
        <Button title="Back" onPress={() => goBack()} />

        <Button title="Update Params" onPress={() => {
            props.navigation.setParams({ profile: { id: 900, name: 'foo' } })
        }} />

    </View>
}


export default function App() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: 'yellow',
                },
                headerTintColor: 'blue',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }
        }>
            <Stack.Screen options={{ title: 'My Personal Diary' }} name="Home" component={Home} />
            <Stack.Screen name="Profile" options={({ route }) => {
                return {
                    title: `Profile - ${route.params.profile.name}` || '',
                }
            }
            } component={Profile} initialParams={{ profile: { id: 0, name: 'name' } }} />
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