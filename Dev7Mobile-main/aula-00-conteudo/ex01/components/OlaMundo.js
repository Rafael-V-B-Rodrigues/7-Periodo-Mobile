import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OlaMundo(OlaMundoProps){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{OlaMundoProps.nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});