import { View } from 'react-native'

const MyComponent = props => {
    return <View style={{ height: '100%', width: '100%', backgroundColor: 'yellow' }}>
        <View style={{ height: '15%', backgroundColor: 'red' }} />
        <View style={{ height: '35%', width: '66%', backgroundColor: 'skyblue' }} />
        <View style={{ height: '50%', width: '33%', backgroundColor: 'steelblue' }} />
    </View >
}


const App = () => {
    return <MyComponent />
}

export default App;