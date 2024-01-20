import React, { memo } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { theme } from "../core/theme"

const MainHeader = () => (<Image source={require("../assets/KSB_Logo.png")} style={styles.image} />)

const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: "row",
       alignItems: 'center', //Centered horizontally
    },
  image: {
    width: 50,
    height: 50,
    marginBottom: 0
  }
})

export default memo(MainHeader)