import React, { memo, useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { theme } from "../core/theme"
import { emailValidator, passwordValidator } from "../core/utils"
import { login } from '../services/auth';
import { userStore } from '../storage/user';

const LoginForm = ({ navigation }) => {

    const updateToken = userStore(state => state.updateToken)
    const updateName = userStore((state) => state.updateName)
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [loading, setLoading] = useState(false);

    const handleSubmit =  useCallback(async () => {
       
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return
        }
        setLoading(true);
        
        await login(email.value, password.value)
        .then(function (response) {
            console.log(response.displayName);
            updateToken(response.apiKey);
            updateName(response.displayName);
           
            navigation.navigate("Navigator");
        })
        .catch(function (error) {
            setEmail({ ...email, error: "Email/password not found" });
            console.log(error);
        }).finally(function(){
            setLoading(false);
        });

    })

    useEffect(() => {
        console.log("initialize");
    });

    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: "" })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: "" })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                >
                <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button mode="contained" onPress={handleSubmit} loading={loading}>
                Login
            </Button>
        </View>
    )
}

export default memo(LoginForm)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        color: "green",
      },
    forgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24
    },
    row: {
      flexDirection: "row",
      marginTop: 4
    },
    label: {
      color: theme.colors.secondary
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary
    }
  })

