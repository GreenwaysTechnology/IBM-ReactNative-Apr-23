import { StyleSheet, Text, View, Button, Alert, StatusBar, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native'
import { useEffect, useState } from 'react';

const Todos = props => {
    //declare state to hold items
    const [todos, setTodos] = useState({
        error: null,
        isLoaded: false,  //spinners or progress bar 
        items: [] //todo data 
    })
    //componentDidMount life cycle method 
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos`;
        fetch(url)
            .then(res => res.json())
            .then(todos => {
                console.log(todos)
                setTodos({
                    items: todos,
                    isLoaded: true
                })
            })
            .catch(err => {
                setTodos({
                    isLoaded: true,
                    error: err
                })
            })
    }, [])

    const { error, isLoaded, items } = todos;
    // conditional rendering:
    if (error) {
        return <View>
            <Text>Error: {error.message}</Text>
        </View>
    } else if (!isLoaded) {
        //show spinner
        return <View style={{
            alignItems: 'center', justifyContent: 'center'
        }}>
            <ActivityIndicator size="large" color="#000ff" />
        </View >
    } else {
        //show data
        return <FlatList
            keyExtractor={(todo) => {
                return todo.id
            }}
            data={items}
            renderItem={({ item }) => {
                const { title } = item
                return <TouchableHighlight onPress={() => {
                        //select item
                }} activeOpacity={0.6} underlayColor="#DDDDD">
                    <View style={styles.item} >

                        <Text style={styles.text}>{title}</Text>
                    </View>
                </TouchableHighlight>

            }

            }
        />
    }
}

const App = () => {
    return <View style={styles.container}>
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'red', textAlign: 'center' }} >Todo App</Text>
        <Todos />

    </View>
}

//page style :Common style 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8
    },
    title: {
        fontSize: 32
    }
})



export default App; 