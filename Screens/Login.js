// Screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import Main from './Main';
import App from '../App';

const Login = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (email === '123@test.com' && password === '123') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid email or password');
        }
    };

    if (isLoggedIn) {
        /*navigation.replace('MainApp');*/
        navigation.navigate('MainApp');
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Ionicons name="logo-doit" size={80} color={theme.primary} />
            <Text style={[styles.title, { color: theme.text }]}>Log In Your Account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Your email"
                    placeholderTextColor={theme.secondaryText}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Your password"
                    placeholderTextColor={theme.secondaryText}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={[styles.forgotPassword, { color: theme.primary }]}>Forgot Your Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={{ color: theme.secondaryText, marginVertical: 20 }}>Or</Text>
            <TouchableOpacity style={[styles.socialButton, { borderColor: theme.primary }]}>
                <Ionicons name="logo-google" size={24} color={theme.primary} />
                <Text style={[styles.socialButtonText, { color: theme.primary }]}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { borderColor: theme.primary }]}>
                <Ionicons name="logo-apple" size={24} color={theme.primary} />
                <Text style={[styles.socialButtonText, { color: theme.primary }]}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.signUp, { color: theme.primary }]}>Don’t Have An Account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 10,
        fontSize: 16,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        fontSize: 14,
    },
    button: {
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
    },
    signUp: {
        fontSize: 14,
        marginVertical: 20,
    },
});

export default Login;
