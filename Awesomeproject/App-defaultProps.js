import { View, Text } from 'react-native'

const Greeter = props => {
    return <View>
        <Text>{props.message}</Text>
    </View>
}
//default props:if props not supplied we can set default props
Greeter.defaultProps = {
    message: 'Welcome'
}
//Customer
const Customer = props => {
    return <View>
        <Text>Id : {props.customer.id}</Text>
    </View>
}
// default Props
Customer.defaultProps = {
    customer: {
        id: 0,
        name: 'Name',
        address: {
            city: 'City'
        }
    }
}

const App = () => {
    const customer = {
        id: 1,
        name: 'Subramanian',
        address: {
            city: 'Coimbatore'
        }
    }
    return <View>
        <Greeter message="Hello" />
        <Greeter />
        <Customer customer={customer} />
        <Customer />

    </View>
}
export default App;