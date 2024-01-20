import React, { memo, useState } from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import Background from "../components/Background"
import Logo from "../components/Logo"
import Header from "../components/Header"
import BackButton from "../components/BackButton"
import { theme } from "../core/theme"
import { emailValidator, passwordValidator } from "../core/utils"

import LoginForm from "../forms/Login"

const LoginScreen = ({ navigation }) => {

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Home")} />

      <Logo />

      <Header>Welcome back.</Header>

      <LoginForm navigation={navigation}/>


      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
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

export default memo(LoginScreen)