import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react';

class App extends React.Component {
    state = {
        like: 0
    }
    //listener 
    onLike = () => {
        //Alert.alert('Like')
        // this.setState((prvState) => {
        //     //return new state : Immutable 
        //     return { ...prvState, like: prvState.like + 1 }
        // })
        this.setState({
            like: this.state.like + 1
        });
    }
  
    render() {
        return <View style={page.container}>
            <Text style={page.text}>State</Text>
            <Text style={page.text}>{this.state.like}</Text>
            <Button title="Like" onPress={this.onLike} />
        </View>
    }
}

//page style :Common style 
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "pink"
    },
    text: {
        fontSize: 30,
        color: '#000'
    }
})



export default App; 