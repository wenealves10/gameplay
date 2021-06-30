import React from "react";
import { View, Text, Image, StatusBar} from "react-native";
import ImageBackground from "../../assets/illustration.png"

import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn(){

    return (
        <View style={styles.container}>
          <StatusBar
           barStyle="light-content"
           backgroundColor="transparent"
           translucent
          />
          <Image 
          source={ImageBackground}
          style={styles.image}
          resizeMode="stretch"
          />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {`\n`}
            Suas Jogatinas {`\n`}
            facilmente
          </Text>
          <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" activeOpacity={0.7}/>
        </View>
        </View>
    )
}