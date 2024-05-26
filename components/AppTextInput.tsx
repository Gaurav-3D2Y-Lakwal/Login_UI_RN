import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({...otherProps}) =>{
  const [focused, setFocused] = useState<boolean>(false);

  return(
    <TextInput
    onFocus={()=>setFocused(true)}
    onBlur={()=>setFocused(false)}
    placeholderTextColor={Colors.darkText}
    style={[styles.inputText, focused && styles.focusedText]}
    {...otherProps}
    />
  )

}

export default AppTextInput;

const styles = StyleSheet.create({
  inputText:{
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    padding: Spacing * 2,
    backgroundColor: Colors.lightPrimary,
    borderRadius: Spacing,
    marginVertical: Spacing,
  },
  focusedText:{
      borderWidth: 3,
      borderColor: Colors.primary,
      elevation: 2,
      shadowOffset: { width: 4, height: Spacing },
      shadowColor: Colors.primary,
      shadowOpacity: 0.2,
      shadowRadius: Spacing,
  }
});
