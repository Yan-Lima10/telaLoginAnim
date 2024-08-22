import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  ImageBackground
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));


  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    // <LinearGradient>
    //  colors={['#FF6F00', '#FF8C00']} // Cores do gradiente
    // style={styles.backgroudGradient}

    <ImageBackground
    source={require('./src/assets/bg.png')}
    style={styles.imgBackground}

    >

      <KeyboardAvoidingView style={styles.imgBackground}>
        <View style={styles.containerLogo}>
          <Image source={require("./src/assets/solidaire_logo.png")} />
        </View>

        <Animated.View
          style={[
            styles.container,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#000"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    opacity: 44,
    borderRadius: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },

  input: {
    backgroundColor: "#49AFD1",
    opacity: 0.5,
    width: 330,
    height: 42,
    marginBottom: 15,
    color: "red",
    fontSize: 17,
    borderRadius: 12,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: "#48A2BF",
    width: 330,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 10,
  },

  submitText: {
    color: "#fff",
    fontSize: 18,
  },

  btnRegister: {
    marginTop: 10,
  },

  registerText: {
    color: "#fff",
  },
});
