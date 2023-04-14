import { View, StyleSheet } from 'react-native'

const MyComponent = props => {
    return <View style={styles.container}>
        {/* i want to use existing style + extra style */}
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        <View style={[styles.box, { backgroundColor: 'steelblue', width: 'auto', minWidth: 50 }]} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        backgroundColor: 'aliceblue',
        minHeight: 200,
        flexDirection:'column',
        //alignItems:'flex-end',
        alignItems:'stretch',

    },
    box: {
        height: 50,
        width: 50
    }
})

const App = () => {
    return <MyComponent />
}
export default App;
