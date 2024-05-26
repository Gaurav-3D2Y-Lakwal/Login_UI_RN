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

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{padding: Spacing*2}}>
        <View style={{alignItems:'center'}}>
           <Text style={styles.header}> Login Here </Text>
           <Text style={styles.subHeader}> Welcome back you've been missed!</Text>
        </View>
        <View style={{marginVertical: Spacing*3 }}>
           <AppTextInput placeholder="Email"/>
           <AppTextInput placeholder="Password"/>
           <TouchableOpacity>
            <Text style={styles.passwordForget}>Forget your password?</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinText}>Sign in</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={()=>navigate("Register")}
           style={{padding: Spacing}}>
            <Text style={[styles.alternateText,{color: Colors.text}]}>Create new account</Text>
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

export default LoginScreen;

const styles = StyleSheet.create({
  header:{
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
  },
  subHeader:{
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.large,
    maxWidth: "60%",
    textAlign: "center",
  },
  passwordForget:{
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-end",
  },
  signinButton:{
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
  signinText:{
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
});
