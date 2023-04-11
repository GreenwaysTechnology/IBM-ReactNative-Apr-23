import { View, Text } from 'react-native'

// const Hello = props => {
//     return <View>
//         <Text>{props.text}</Text>
//     </View>
// }
// const Hello = props => {
//     const { text } = props
//     return <View>
//         <Text>{text}</Text>
//     </View>
// }
// const Hello = ({text}) => {
//     return <View>
//         <Text>{text}</Text>
//     </View>
// }
const Hello = ({ text }) => <View>
    <Text>{text}</Text>
</View>

export default Hello;