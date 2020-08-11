import { StyleSheet } from "react-native";
import { apisAreAvailable } from "expo";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#8257e5",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
  },
});

export default styles;
