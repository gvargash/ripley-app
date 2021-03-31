import React from "react";
import { StyleSheet, Image, View } from "react-native";
import logo from "./../../../assets/logo.jpg";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 60,
    height: 60,
  },
});
