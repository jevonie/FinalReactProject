import React, { memo } from "react"
import { StyleSheet, Image, View } from "react-native"

const Footer = () => (
    <View style={styles.footer}>
        <Image source={require("../assets/cdo-small.png")} style={{ flex: 1, height: 70, width: 150, resizeMode: 'contain',}} />
        <Image source={require("../assets/risev2.png")} style={{ flex: 1, height: 70, width: 200, resizeMode: 'contain',}} />
        <Image source={require("../assets/ICTLogo.png")} style={{ flex: 1, height: 60, width: 150, resizeMode: 'contain',}} />
    </View>

  )

  const styles = StyleSheet.create({
    footer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
  })
  

export default memo(Footer)