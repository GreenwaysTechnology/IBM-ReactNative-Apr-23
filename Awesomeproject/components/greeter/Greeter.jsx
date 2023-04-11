import { View, Text } from 'react-native'
import Hello from './Hello';

const Greeter = () => {
    return <View>
        <Text>Welcome to React Native</Text>
        <Hello text="Hello React Native" />
        <Hello text="Hello Mobile" />
    </View>
}
export default Greeter;