import { FlatList, Text, View } from 'react-native'
import TODOS from './mockdata/todos'


const Todo = props => {
    return <View>
        <Text>Todo</Text>
        {/* <FlatList
            data={props.todos}
            renderItem={(obj) => {
                console.log(obj)
                return <Text>{obj.item.title}</Text>
            }} /> */}
        {/* <FlatList
            data={props.todos}
            renderItem={({item}) => {
                console.log(item)
                return <Text>{item.title}</Text>
            }} /> */}
        {/* <FlatList
            data={props.todos}
            renderItem={({ item: { title } }) => {
                return <Text>{title}</Text>
            }} /> */}
        <FlatList
            data={props.todos}
            renderItem={({ item: { title } }) => <Text>{title}</Text>}
            keyExtractor={item => item.id}
        />
    </View>
}


const App = () => {
    return <View>
        <Todo todos={TODOS} />
    </View>

}
export default App;