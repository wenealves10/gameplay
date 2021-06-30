import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";

import { styles } from "./styles";

export function SignIn(){

    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
          <Text>Hello World</Text>
          <TextInput 
          style={styles.textInput}
          onChangeText={setText}
          />
          <Text>Digitou isso: {text}</Text>
        </View>
    )
}