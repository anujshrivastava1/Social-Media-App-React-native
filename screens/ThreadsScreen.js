import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    Button,
  } from "react-native";
  import React, { useState, useContext } from "react";
  import { UserType } from "../UserContext";
  import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const ThreadsScreen = () => {
    const { userId, setUserId } = useContext(UserType);
    const [content, setContent] = useState("");
    const getAuthToken = async () => {
      try {
        const authToken = await AsyncStorage.getItem("authToken");
        return authToken; // Return the token value
      } catch (error) {
        console.error('Error retrieving auth token:', error);
        return null; // Handle errors appropriately
      }
    };



    const handlePostSubmit = async () => {
      try {
        const authToken = await getAuthToken();
    
        const postData = {
          content: content,
        };
    
        axios
          .post("http://localhost:5000/create-post", postData, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .then((response) => {
            setContent("");
          })
          .catch((error) => {
            console.log("error creating post", error);
          });
      } catch (error) {
        console.log("Error retrieving auth token", error);
      }
    };

    return (
      <SafeAreaView style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
            }}
          />
  
          <Text>Anuj</Text>
        </View>
  
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <TextInput
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholderTextColor={"black"}
            placeholder="Type your message..."
            multiline
          />
        </View>
  
        <View style={{ marginTop: 20 }} />
  
        <Button onPress={handlePostSubmit} title="Share Post" />
      </SafeAreaView>
    );
  };
  
  export default ThreadsScreen;
  
  const styles = StyleSheet.create({});
  