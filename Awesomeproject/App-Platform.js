//Platform information

import { View, Text, StyleSheet, Platform } from 'react-native'

const App = () => {

     return <View style={styles.container}>
         <Text>Platform Information</Text>
         <Text>OS : {Platform.OS}</Text>
         <Text>OS version: {Platform.Version}</Text>
         <Text>Device Type {Platform.isTV ? "TV" : "Mobile"}</Text>
         <Text>Platform Constants</Text>
         <Text>{JSON.stringify(Platform.constants)}</Text>
     </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink',
        fontSize:50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App;