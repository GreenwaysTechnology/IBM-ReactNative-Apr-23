import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { useState } from 'react';

const Like = props => {
    const [like, setLike] = useState(0)
    //Listener
    const onLike = () => {
        setLike(like => {
            return like + 1
        })
    }

    return <View style={page.container}>
        <Text>Hooks</Text>
        <Text>{like}</Text>
        <Button title="Like" onPress={onLike} />
    </View>
}

const App = () => {
    return <Like />
}

//page style :Common style 
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "pink"
    }
})



export default App; 