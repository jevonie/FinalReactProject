import React, { memo, useState, useEffect } from "react"
import Background from "../components/Background"
import Logo from "../components/Logo"
import Header from "../components/Header"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Footer from "../components/Footer"
import { userStore } from '../storage/user';

const HomeScreen = ({ navigation }) => { 
  
  const tokenExist = userStore(state => state.tokenExist);
  const [labelButton, setLabelButton] = useState("Login");
  useEffect(() => {
    if (tokenExist == true) {
      setLabelButton("Dashboard");
    }
  });
  return(
      <Background>
        <Logo />
        <Header>REPORTING APP</Header>
        <Button mode="contained" onPress={() => navigation.navigate(tokenExist == true ? "Dashboard" : "Login")}>
          {labelButton}
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Button>
        <Footer>Test</Footer>
      </Background>
    )
  }
export default memo(HomeScreen)