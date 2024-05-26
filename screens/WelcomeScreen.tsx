import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
        resizeMode="contain"
        source={require('../assets/images/welcome-img.png')}
        style={styles.image}
        />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Discover Your Dream Job here</Text>
        <Text style={styles.SubHeader}>Explore all the existing job role based on your interest and study major</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={()=>navigate("Login")}
         style={styles.loginButton}> 
          <Text style={[styles.buttonText, {color:Colors.onPrimary}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> navigate("Register")}
        style={styles.registerButton}>
          <Text style={[styles.buttonText, {color:Colors.text}]}>Register</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image:{
      height: height / 2.5,
  },
  textContainer:{
      paddingHorizontal: Spacing * 4,
      paddingTop: Spacing * 4,
  },
  headerText:{
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  SubHeader:{
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  buttonContainer:{
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    flexDirection: "row",
  },
  loginButton:{
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0,height: Spacing, },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  registerButton:{
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
  },
  buttonText:{
    fontFamily: Font["poppins-bold"],
    fontSize: FontSize.large,
    textAlign: "center",
  }
});
