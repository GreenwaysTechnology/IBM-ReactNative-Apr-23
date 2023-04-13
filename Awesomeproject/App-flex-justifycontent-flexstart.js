import { StyleSheet, View,Text } from 'react-native'

const MyComponent = props => {
    // Flex container
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>justifyContent: :Column : flex-start</Text>
        <View style={styles.elementsContainer}>
            <View style={{width:50,height:50,backgroundColor:'red'}}/>
            <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
            <View style={{width:50,height:50,backgroundColor:'green'}}/>
        </ View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 24,
        color:'blue'
    },
    elementsContainer: {
        flex:1,
        backgroundColor:'black',
        marginLeft: 24,
        marginRight:24,
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginBottom:24
    }

})

const App = () => {
    return <MyComponent />
}

export default App;