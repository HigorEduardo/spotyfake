import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Player({ navigation }) {
  const route = useRoute();
  const { name, image } = route.params || {};

  if (!name || !image) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Dados não encontrados!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        onError={(e) => console.log("Erro ao carregar imagem:", e.nativeEvent.error)}
      />
      <Text style={styles.title}>{name}</Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});
