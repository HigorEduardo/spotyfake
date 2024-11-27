import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Player = ({ route }) => {
    const { name, image, description, tracks } = route.params; //
  return (
    <View style={styles.container}>
      {name && image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
          {tracks && <Text style={styles.tracks}>{tracks} faixas disponíveis</Text>}
        </>
      ) : (
        <Text style={styles.error}>Nenhum dado foi enviado para esta página.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  error: {
    fontSize: 16,
    color: '#FF0000',
  },
});

export default Player;
