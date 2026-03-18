import {View, Text, StyleSheet} from "react-native";

export default function Componente() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Exemplo de componente</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c6cfff'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})