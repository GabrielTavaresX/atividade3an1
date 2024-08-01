import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/globalstyles';
import { ButtonInterface } from '../../components/ButtonInterface';
import { LoginTypes } from '../../navigation/login/login.navigation';
import { useAuth } from '../../hook/auth';
import { AxiosError } from 'axios';

export interface IAuthenticate {
    email?: string;
    password?: string;
}
export function Login({ navigation }: LoginTypes) {
    const [data, setData] = useState<IAuthenticate>();
    const { signIn, setLoading } = useAuth()
    async function handleSignIn() {
        if (data?.email && data.password) {
            setLoading(true)
            try{
                await signIn(data)
            }catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleRegister() {
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }
    function handleHome() {
        navigation.navigate('Slide1')
    }


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholderTextColor={colors.third}
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ email: i })}
                    />
                </View>
                <View style={styles.formRow}>
                    <Entypo name="key" style={styles.icon} />
                    <TextInput
                        placeholderTextColor={colors.third}
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>
                <ButtonInterface title='Login' type='primary' onPressI={handleHome} />
                <ButtonInterface title='Cadastre-se' type='secondary' onPressI={handleRegister} />
            </KeyboardAvoidingView >
        </View >
    );
}
