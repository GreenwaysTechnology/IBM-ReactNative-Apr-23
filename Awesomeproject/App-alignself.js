import { StyleSheet, View, Text } from 'react-native'

const MyComponent = props => {
    return <View style={styles.container}>
        <View
            style={[
                styles.box,
                {
                    alignSelf:'stretch',
                    width: 'auto',
                    minWidth: 50,
                    backgroundColor: 'red',
                },
            ]}
        />
        <View style={[styles.box, { backgroundColor: 'skyblue',alignSelf:'center' }]} />
        <View style={[styles.box, { backgroundColor: 'steelblue',alignSelf:'flex-end' }]} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'yellow',
        height:50,
    },
    box: {
        width: 50,
        height: 50,
    }
})

const App = () => {
    return <MyComponent />
}

export default App;