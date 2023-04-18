import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import icon from './assets/icon.png'


const App = () => {
    return <View style={styles.container}>
        <Image source={icon} style={styles.image}></Image>
        <Text style={{ color: '#888', fontSize: 18 }}>To share a photo from Your Phone Just Press Button below!</Text>
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 305,
        height: 159
    }
})