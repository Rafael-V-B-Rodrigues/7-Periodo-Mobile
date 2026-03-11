import { StyleSheet, Text } from "react-native"

export default function Greeting(props){
    const {nome} = props
    return(
        <Text style={styles.greeting} >Olá {nome}</Text>
    )
}

const styles = StyleSheet.create({
    greeting:{
        fontSize: 18,
        margin: 5,
        color:'#be0909'
    }
})