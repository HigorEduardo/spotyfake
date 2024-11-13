import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return alert('Todos os campos devem ser preenchidos');
    }
    
    const formData = {email: email, password: password};

    try {
      const res = fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      switch (response.status) {
        case 2010:
          alert("ok");
          console.log(res.token)
          break;
        case 406:
          alert("Preencha todos os campos");
          break;
        case 418:
          alert("Email já cadastrado");
          break;
        default:
          alert("Erro ao se conectar com servidor");
          break;
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/spotyfake.png')} style={styles.image} />
        <Text style={styles.headerText}>SpotyFake</Text>
        <Text style={styles.subHeaderText}>Entre para ouvir sua música favorita!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.signupContainer}>
        <Link href="/home" >
        <Button title="Entrar" onPress={handleLogin} color="#a80000" />
        </Link>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não tem uma conta?</Text>
          <Link href="/Cadastro">
            <Text style={styles.signupLink}>Cadastre-se</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#a80000',
  },
  subHeaderText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  form: {
    paddingHorizontal: 20,
  },

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'grey',
    color: 'white',
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
    color: 'white',
    marginRight: 5,
  },
  signupLink: {
    color: '#a80000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  image: {
    marginTop: -60,
    marginBottom: 50,
    width: 200,
    height: 200,
  },
});
