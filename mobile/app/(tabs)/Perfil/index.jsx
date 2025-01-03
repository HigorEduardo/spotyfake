import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Alert, TouchableOpacity, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Perfil() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);  
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalName, setModalName] = useState(name);
  const [modalEmail, setModalEmail] = useState(email);
  const [modalBirthday, setModalBirthday] = useState('');

  const handleSendImage = async (imageUri) => {
    try {
      const data = {
        file: imageUri,
        upload_preset: 'ml_default',
      };

      const res = await fetch('https://api.cloudinary.com/v1_1/dmicd1vvk/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }

      const result = await res.json();
      setProfileImage(result.url);
      console.log(result);
    } catch (e) {
      console.error('Erro ao enviar imagem:', e);
      Alert.alert('Erro', 'Não foi possível enviar a imagem.');
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://192.168.0.100:8000/get.users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Resposta não é JSON');
      }

      const userData = await response.json();
      setName(userData.name);
      setEmail(userData.email);
      setBio(userData.bio);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      Alert.alert('Erro', 'Erro ao conectar ao servidor.');
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria para selecionar uma imagem.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      handleSendImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    setName(modalName);
    setEmail(modalEmail);
    Alert.alert('Perfil atualizado', 'Suas alterações foram salvas.');
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      setIsPasswordModalVisible(false);  
    } else {
      Alert.alert('Erro', 'As senhas não coincidem.');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleOpenEditModal = () => {
    setModalName(name);
    setModalEmail(email);
    setModalBirthday('');
    setIsEditModalVisible(true);  
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);  
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bloco}>
        <View style={styles.margem}>
          <View style={styles.profileHeader}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={profileImage ? { uri: profileImage } : require('../../../assets/images/avatar.png')}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <Text style={styles.NomeP}>Higor</Text>
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


          <TouchableOpacity onPress={handleOpenEditModal} style={styles.botao}>
            <Text style={styles.botaoText}>Editar Informações</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsPasswordModalVisible(true)} style={styles.botao}>
            <Text style={styles.botaoText}>Trocar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={isEditModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={modalName}
              onChangeText={setModalName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={modalEmail}
              onChangeText={setModalEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Data de Aniversário"
              value={modalBirthday}
              onChangeText={setModalBirthday}
            />

            <TouchableOpacity onPress={handleSave} style={styles.botao}>
              <Text style={styles.botaoText}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCloseEditModal} style={styles.botao}>
              <Text style={styles.botaoText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={isPasswordModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Trocar Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar nova senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={handleChangePassword} style={styles.botao}>
              <Text style={styles.botaoText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPasswordModalVisible(false)} style={styles.botao}>
              <Text style={styles.botaoText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  NomeP:{
    fontSize:20,
    color:'white'
  },
  margem: {
    margin: 20,
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
  botao: {
    backgroundColor: '#a80000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
