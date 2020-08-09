import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/marlloncampos.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}> Marllon Campos</Text>
          <Text style={styles.subject}> Quimica</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Sou estudante de Ciências da Computação, e ansioso para trabalhar com
        JavaScript, Python HTML, CSS e Java como também procurando por novas
        tecnologias
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
