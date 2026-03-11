import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <View>
            <Text style={styles.text}>Você Clicou {count}</Text>
            <Button title="Clique aqui" onPress={() => setCount(count+1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
 
    text:{
        fontSize:20,
        marginBottom: 20
    }
})