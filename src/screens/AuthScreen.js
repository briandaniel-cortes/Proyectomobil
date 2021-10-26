import React, { useState } from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import { layoutStyle } from "../styles";

export default function LoginScreen() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <View style={layoutStyle.container}>
     
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          <LoginForm setShowLogin={setShowLogin} />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
