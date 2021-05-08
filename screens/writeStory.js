import React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
        }}
      >
        <Header
          centerComponent={{
            text: "Write Story",
            style: { color: "black", fontSize: 20, fontWeight: "bold" },
          }}
          backgroundColor="#FFAD8D"
        />

        <TextInput
          style={styles.formTextInput}
          placeholder={"Story Title"}
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          maxLength={10}
          value={this.state.title}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder={"Author"}
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          maxLength={10}
          value={this.state.author}
        />
        <TextInput
          style={[styles.formTextInput, {height:200}]}
          placeholder={"Write Your Story"}
          onChangeText={(text) => {
            this.setState({
              story: text,
            });
          }}
          
          value={this.state.story}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles=StyleSheet.create({
  formTextInput:{
    width:400,
    height:50,
    borderWidth:2,
    margin:10,
    justifyContent:"center",
    alignItems: "center",
    alignSelf: "center",
  },
  submitButton:{
    width:100,
    height:40,
    borderWidth:2,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin:5 ,
    padding: 5,
    borderRadius: 5,
  },
  submitButtonText:{
    fontSize:20,
    textAlign:"center",
  },
})