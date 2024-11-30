import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import { Link } from 'expo-router';

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleRegister = async() => {
        if (!nome || !nascimento || !email || !senha) {
            return alert('Todos os campos devem ser preenchidos');
        }

        const formData = { nome: nome, nascimento: nascimento, email: email, senha: senha };

        try {
            const res = await fetch("http://localhost:8000/autenticacao/registro", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        console.log(res.status)
            switch (res.status) {
                case 201:
                    alert("Usuário criado");
                    break;
                case 406:
                    break;
                case 418:
                    alert("Email já cadastrado");
                    break;
                default:
                    alert("Erro ao se conectar com servidor");
                    break;
            }
        } catch (error) {
            console.error(error);
        }
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
                        value={nome}
                        onChangeText={(text) => setNome(text)}
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
                        value={nascimento}
                        onChangeText={(text) => setNascimento(text)}
                    />
                    <TextInput
                        style={styles.inputup}
                        placeholder="Senha"
                        placeholderTextColor="#fff"
                        secureTextEntry
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                    <Link href="/">
                        <TouchableOpacity style={styles.buttonup} onPress={handleRegister}>
                            <Text style={styles.buttonTextup}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View style={styles.signupContainerup}>
                    <Text style={styles.signupTextup}>Já tem conta?</Text>
                    <Link href="/">
                        <Text style={styles.signupLinkup}>Entre</Text>
                    </Link>
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
            marginTop: -50,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#a80000',
        },
        subHeaderTextup: {
            fontSize: 16,
            color: 'white',
            marginTop: 10,
            marginBottom:30
        },
        formup: {
            marginTop: -40,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputup: {
            width: '90%',
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
        buttonup: {
            backgroundColor: '#a80000',
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
        },
        buttonTextup: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
        signupContainerup: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        signupTextup: {
            marginBottom: 70,
            fontSize: 16,
            color: 'white',
            marginRight: 5,
        },
        signupLinkup: {
            color: '#a80000',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 5,
            marginBottom: -40
        },
        imageup: {
            marginBottom: 50,
            width: 150,
            height: 150
        }
});
