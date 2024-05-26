import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{padding: Spacing*2}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>Create Account</Text>
          <Text style={styles.subHeader}>Create an account so you explore all the existing jobs</Text>
        </View>
        <View>
          <View style={{marginVertical: Spacing*3 }}>
         <AppTextInput placeholder="Email"/>
         <AppTextInput placeholder="Password"/>
         <AppTextInput placeholder="Confirm Password"/>
         </View>

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: Spacing}} onPress={()=>navigate("Login")}>
             <Text style={[styles.alternateText,{color: Colors.text}]} >Already have an account</Text>
          </TouchableOpacity>

        </View>
        <View style={{marginVertical: Spacing *3}}>

           <Text style={[styles.alternateText,{color: Colors.primary}]}>Or continue with</Text>
           
           <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.logoButton}>
               <Ionicons 
                name="logo-google"
                color={Colors.text}
                size={Spacing*2}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoButton}>
                <Ionicons 
                name="logo-facebook"
                color={Colors.text}
                size={Spacing*2}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoButton}>
                <Ionicons
                 name="logo-apple"
                 color={Colors.text}
                 size={Spacing*2}/>
            </TouchableOpacity> 
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;


const styles = StyleSheet.create({
  header:{
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
  },
  subHeader:{
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    maxWidth: "80%",
    textAlign: "center",
  },
  signupButton:{
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  signupText:{
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
 alternateText:{
  fontFamily: Font["poppins-semiBold"],
  textAlign: "center",
  fontSize: FontSize.small,
 },
  logoContainer:{
    marginTop: Spacing,
    flexDirection: "row",
    justifyContent: "center",
  },
  logoButton:{
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
   marginHorizontal: Spacing,
  }
})