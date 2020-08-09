import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";


function Favorites() {
  return <View style={styles.container}>
    <PageHeader title="Meus proffys favoritos " />
  </View>;
}

export default Favorites;
