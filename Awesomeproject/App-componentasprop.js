import { View, Text } from 'react-native'

const Greeter = props => {

    return <View>
        <Text>{props.children}</Text>
    </View>
}
const Hello = props => {
    return <Text>Hello</Text>
}

const App = () => {
    return <View>
        <Greeter>
            <Hello />
        </Greeter>
    </View>
}
export default App;