import { View, Text } from 'react-native'
import PropTypes from 'prop-types'; // ES6
import React from 'react';

class Greeter extends React.Component {
    render() {
        return <View>
            <Text>{this.props.message}</Text>
        </View>
    }
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
        <Greeter/>

    </View>
}
export default App;