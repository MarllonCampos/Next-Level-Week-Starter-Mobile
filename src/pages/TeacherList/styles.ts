import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  teacherList: {
    marginTop: -30,
  },
  searchForm: {
    marginTop: 10,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  picker: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  inputGroup: {
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },
});

export default styles;
