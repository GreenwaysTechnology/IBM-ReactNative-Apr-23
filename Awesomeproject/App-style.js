import { StyleSheet, Text, View } from 'react-native'

const Message = props => {
    return <>
        <Text style={styles.label}>{props.message}</Text>
        <Text style={{
            fontSize: 90,
            fontWeight: 'bold',
            fontFamily: "TGaramond",
            color: '#61dafb',
            borderWidth: 4
        }}>{props.message}</Text>

    </>
}

const App = () => {
    return <View>
        <Message message="Hello" />
    </View>

}
export default App;

//Style sheet Object 
const styles = StyleSheet.create({
    label: {
        fontSize: 90,
        fontWeight: 'bold',
        fontFamily: "TGaramond",
        color: '#61dafb',
        borderWidth: 4,
        width: 220
    }
})