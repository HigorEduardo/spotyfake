import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    const [name, setName] = useState("");
    const [bday, setBday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        if (!name || !bday || !email || !password) {
            return alert('Todos os campos devem ser preenchidos');
        }

        const formData = {name: name, bday: bday, email: email, password: password};

        try {
            const res = fetch("http://localhost:8000/registro", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            switch (response.status) {
              case 201:
                alert("Usuário criado");
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
    }

    return (
        <SafeAreaView style={styles.containerup}>
            <View style={styles.headerup}>
                <Image source={require('../../../assets/images/spotyfake.png')} style={styles.imageup} />
                <Text style={styles.headerTextup}>SpotyFake</Text>
                <Text style={styles.subHeaderTextup}>Cadastre-se para ouvir sua música favorita!</Text>
            </View>

            <View style={styles.formup}>
                <TextInput
                    style={styles.inputup}
                    placeholder="Name"
                    placeholderTextColor="#fff"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="E-mail"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="dd/mm/aaaa"
                    placeholderTextColor="#fff"
                    value={bday}
                    onChangeText={(text) => setBday(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Link href="/">
                    <TouchableOpacity style={styles.buttonup} onPress={handleRegister}>
                        <Text style={styles.buttonTextup}>Cadastre-se</Text>
                    </TouchableOpacity>
                </Link>

                <View style={styles.signupContainerup}>
                    <Text style={styles.signupTextup}>Já tem conta?</Text>
                    <Link href="/">
                        <Text style={styles.signupLinkup}>Entre</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerup: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    headerup: {
        alignItems: 'center',
        marginBottom: 40,
    },
    headerTextup: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#a80000',
    },
    subHeaderTextup: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    formup: {
        paddingHorizontal: 20,
    },
    inputup: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: 'grey',
        color: 'white'
    },
    buttonup: {
        backgroundColor: '#a80000',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft:650
    },
    buttonTextup: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainerup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupTextup: {
        fontSize: 16,
        color: 'white',
        marginRight: 5,
    },
    signupLinkup: {
        color: '#a80000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,

    },
    imageup: {
        marginTop: -50,
        marginBottom: 50,
        width: 200,
        height: 200
    }
});
