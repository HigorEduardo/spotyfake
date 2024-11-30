import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Home({ navigation }) {
  const items = [
    {
      id: 1,
      name: 'Rap',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKnlPOSoqXCmsLrYDzd44ih2zBJJOx1LQ0pLVv5XC53GosLPZC',
    },
    {
      id: 2,
      name: 'Trap',
      image: 'https://s2-g1.glbimg.com/edM1HJtDGbHdDXZvhIJfUGiyWrA=/0x0:1080x1350/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/G/qfvEJ5Qdiq18A4BKQGJQ/matue4.jpg',
    },
    {
      id: 3,
      name: 'Funk',
      image: 'https://uploads.metroimg.com/wp-content/uploads/2021/05/17075645/MC-Kevin6.jpg',
    },
    {
      id: 4,
      name: 'Reggae',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmeVzbvGefsTWXV6OCRlSEnL8M5AeKj4ZncpIdgEe_DFZMd4jGXuH2GLNdoBwRAMNF36OujuxSafKZGaKYcvDIug',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.navigate('Perfil')}>
          <Ionicons name="person-circle-outline" size={28} color="#282828" />
        </Pressable>

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
}


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
    backgroundColor: '#a80000',
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
