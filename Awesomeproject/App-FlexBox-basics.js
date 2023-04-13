import { View } from 'react-native'

const MyComponent = props => {
    // Flex container
    return <View style={{ flex: 1 }}>
        {/* Flex items:children */}
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        <View style={{ flex: 3, backgroundColor: 'blue' }} />
        <View style={{ flex: 4, backgroundColor: 'green' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }} />
            <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        </View>
    </View>
}


const App = () => {
    return <MyComponent />
}

export default App;