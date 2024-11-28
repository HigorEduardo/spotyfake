// Home.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation para navegação

const Home = () => {
  const navigation = useNavigation(); // Hook de navegação

  const items = [
    {
      id: 1,
      name: 'Rock Classics',
      image: 'https://via.placeholder.com/150',
      description: 'Uma coleção dos melhores clássicos do rock.',
      tracks: 30
    },
    {
      id: 2,
      name: 'Pop Hits',
      image: 'https://via.placeholder.com/150',
      description: 'Os maiores sucessos do pop atual.',
      tracks: 50
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="person-circle-outline" size={24} color="#FFFFFF" />
        <TextInput style={styles.searchBar} placeholder="Pesquisar..." placeholderTextColor="#AFAFAF" />
        <Ionicons name="home-outline" size={20} color="#FFFFFF" />
      </View>

      <Text style={styles.sectionTitle}>Você pode gostar:</Text>
      {items.map((item) => (
        <Pressable
          key={item.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Player', { 
              name: item.name,
              image: item.image,
              description: item.description,
              tracks: item.tracks 
            })
          }
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </Pressable>
      ))}

      <Text style={styles.sectionTitle}>Artistas populares:</Text>
      <View style={styles.grid}>
        {[
          'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2sUkRq-default.jpg',
          'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0FsQXS-default.jpg',
          'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1vscg0-default.jpg',
        ].map((imageUri, index) => (
          <Image key={index} style={styles.circleCard} source={{ uri: imageUri }} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: '#6A0DAD',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    color: '#FFFFFF',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  circleCard: {
    width: '28%',
    aspectRatio: 1,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default Home;
