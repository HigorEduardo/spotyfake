import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos!');
        } else {
            //lógica de autenticação (via API, Firebase, etc.)
            Alert.alert('Sucesso', `Bem-vindo, ${email}!`);
        }
    };

    const handleSignup = () => {
        Alert.alert('Cadastro', 'Vá para a tela de cadastro');
    };

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
                    placeholder="E-mail"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="Confime sua senha"
                    placeholderTextColor="#fff"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.buttonup} onPress={handleLogin}>
                    <Text style={styles.buttonTextup}>Cadastre-se</Text>
                </TouchableOpacity>
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
