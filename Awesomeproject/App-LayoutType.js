
import { StyleSheet, View, Text } from 'react-native'

const MyComponent = () => {
    // Flex container
    return <View style={styles.container}>

        {/* <View style={[styles.box, { backgroundColor: 'powderblue', top: 50, left: 25, position: 'relative' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue', top: 50, left: 50, position: 'relative' }]} />
        <View />
        <View style={[styles.box, { backgroundColor: 'red', top: 75, left: 75, position: 'relative' }]} /> */}
        <View style={[styles.box, { backgroundColor: 'powderblue', top: 25, left: 25, position: 'absolute' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue', top: 50, left: 50, position: 'absolute' }]} />
        <View />
        <View style={[styles.box, { backgroundColor: 'red', top: 75, left: 75, position: 'absolute' }]} />
        <View />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        minWidth: 200,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'

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