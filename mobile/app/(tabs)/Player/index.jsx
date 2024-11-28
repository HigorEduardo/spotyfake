// Player.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Importando useRoute para acessar os parâmetros


const Player = () => {
  const route = useRoute(); // Obtendo os parâmetros da rota
  const { name, image, description, tracks } = route.params; // Acessando os parâmetros passados

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.tracks}>Número de faixas: {tracks}</Text>
    </View>
  );
};

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
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  tracks: {
    fontSize: 14,
    color: '#AFAFAF',
  },
});

export default Player;
