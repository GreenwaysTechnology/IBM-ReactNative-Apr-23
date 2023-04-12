//Section List 
import { SectionList, Text, View } from 'react-native'
import COURSELIST from './mockdata/course'


const Course = props => {
    console.log(props)
    return <View>
        <SectionList
            sections={props.courselist}
            renderItem={({item}) => {
                console.log(item)
                return <Text>{item}</Text>
            }}
            keyExtractor={(item, index) => {
                return item + index
            }}
            renderSectionHeader={({ section: { title } }) => {
                return <Text>{title}</Text>
            }}
        />
        
       

    </View>
}


const App = () => {
    return <View>
        <Course courselist={COURSELIST} />
    </View>

}
export default App;