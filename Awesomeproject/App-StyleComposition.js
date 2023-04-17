import { StyleSheet, Text, View } from 'react-native'



const App = props => {
    return <View style={container}>
        <Text style={text}>Hello</Text>
    </View>
}
//page style :Common style 
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "pink"
    },
    text: {
        fontSize: 30,
        color: '#000'
    }
})
//list styles 

const lists = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#61dafb'
    },
    listItem: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})

//merge twos 
const container = StyleSheet.compose(page.container, lists.container)
const text = StyleSheet.compose(page.text, lists.listItem)


export default App; 