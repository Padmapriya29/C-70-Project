import React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View
        style={{
          flex: 1,
          marginTop:20
        }}
      >
        <Header
          centerComponent={{
            text: "Read Story",
            style: { color: "black", fontSize: 20, fontWeight: "bold" },
          }}
          backgroundColor="#FFAD8D"
        />
      </View>
        )
    }
}
