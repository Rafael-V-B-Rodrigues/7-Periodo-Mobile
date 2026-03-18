import { Text, StyleSheet} from "react-native";

export default function Greeting(props){
    const { nome } = props;

    return <Text style={styles.greeting}>Oi {nome}</Text>
}

const styles = StyleSheet.create({
    greeting: {
        fontSize: 18,
        margin: 5,
        color: '#FFF'
    }
})