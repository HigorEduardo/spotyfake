import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('João Silva');
  const [email, setEmail] = useState('joao.silva@gmail.com');
  const [bio, setBio] = useState('Amante de música e desenvolvedor React Native.');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.margem}>
      <View style={styles.profileHeader}>
        <Image source={require('../../../assets/images/avatar.png')} style={styles.avatar} />
        {isEditing ? (
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.profileBody}>
        <Text style={styles.bioTitle}>Bio</Text>
        {isEditing ? (
          <TextInput
            style={styles.bioInput}
            value={bio}
            onChangeText={(text) => setBio(text)}
            multiline
          />
        ) : (
          <Text style={styles.bio}>{bio}</Text>
        )}
      </View>

      {isEditing ? (
        <Button title="Salvar" onPress={handleSave} color="#a80000" />
      ) : (
        <Button title="Editar Perfil" onPress={() => setIsEditing(true)} color="#a80000" />
      )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
  },
  margem:{
   margin:20, 
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  nameInput: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  profileBody: {
    marginVertical: 20,
  },
  bioTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
  },
  bioInput: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'gray',
    textAlignVertical: 'top',
  },
});
