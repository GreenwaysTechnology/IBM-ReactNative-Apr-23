/* eslint-disable prettier/prettier */
//prop validation 

import { View, Text } from 'react-native'
import PropTypes from 'prop-types'; // ES6

const Greeter = props => {
    return <View>
        <Text>{props.message}</Text>
    </View>
}
//default props:if props not supplied we can set default props
Greeter.defaultProps = {
    message: 'Welcome'
}
//prop validation
Greeter.propTypes = {
    message: PropTypes.string
}

const App = () => {
      return <View>
        <Greeter message="Hello" />
        {/* <Greeter message={10} /> */}
        <Greeter message="welcome"/>
    </View>
}
export default App;