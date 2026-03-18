import {useState} from 'react'
import { View, Text, Button, StyleSheet} from "react-native";

export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.counter}> Você pegou viros {count} vezes.</Text>
            <Button title='Minecraft Gratis' onPress={() => setCount(count + 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counter: {
        fontSize: 20,
        marginBottom: 20
    }
})