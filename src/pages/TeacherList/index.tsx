import React, { useState } from "react";
import { View, Text, ScrollView, Modal } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";

import styles from "./styles";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [textTime, setTextTime] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const materias = [
    { value: "Artes", label: "Artes" },
    { value: "Biologia", label: "Biologia" },
    { value: "Ciencias", label: "Ciencias" },
    { value: "Educacao Fisica", label: "Educacao Fisica" },
    { value: "Fisica", label: "Fisica" },
    { value: "Geografia", label: "Geografia" },
    { value: "Historia", label: "Historia" },
    { value: "Matemática", label: "Matemática" },
    { value: "Português", label: "Português" },
    { value: "Quimica", label: "Quimica" },
  ];

  const diaDaSemana = [
    { value: "0", label: "Domingo" },
    { value: "1", label: "Segunda-feira" },
    { value: "2", label: "Terça-Feira" },
    { value: "3", label: "Quarta-Feira" },
    { value: "4", label: "Quinta-feira" },
    { value: "5", label: "Sexta-Feira" },
    { value: "6", label: "Sábado" },
  ];

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleTimeSelector() {
    setIsButtonVisible(true);
  }

  function handleDate(date: Date | undefined | any) {
    const data = date;
    let stNumber;
    let ndNumber;

    if (data.getHours() < 10) {
      stNumber = `0${data.getHours()}`;
    } else {
      stNumber = `${data.getHours()}`;
    }

    if (data.getMinutes() < 10) {
      ndNumber = `0${data.getMinutes()}`;
    } else {
      ndNumber = `${data.getMinutes()}`;
    }

    const tempo = `${stNumber}:${ndNumber}`;

    setTextTime(tempo);
    setIsButtonVisible(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  function handleToggleFiltersVisible() {
    loadFavorites();
    setIsFiltersVisible(!isFiltersVisible);
  }
  async function handleFiltersSubmit() {
    const response = await api.get("/classes", {
      params: { subject, week_day, time: textTime },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton>
            <Feather
              name="filter"
              size={20}
              color="#fff"
              onPress={handleToggleFiltersVisible}
            />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <DropDownPicker
              arrowSize={25}
              arrowColor="#8257e5"
              dropDownMaxHeight={115}
              items={materias}
              containerStyle={{ height: 40 }}
              style={styles.picker}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={(item) => {
                setSubject(item.value);
              }}
              placeholder="Escolha a Matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <DropDownPicker
                  arrowSize={12}
                  arrowColor="#8257e5"
                  dropDownMaxHeight={110}
                  items={diaDaSemana}
                  containerStyle={{ height: 40, width: 140 }}
                  style={styles.picker}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => {
                    setWeekDay(item.value);
                  }}
                  placeholder="Dia da Semana"
                  placeholderStyle={{
                    fontSize: 12,
                    fontFamily: "Archivo_400Regular",
                  }}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <RectButton style={styles.picker} onPress={handleTimeSelector}>
                  <Text>{textTime || "Hora"}</Text>
                </RectButton>

                <DateTimePickerModal
                  isVisible={isButtonVisible}
                  mode="time"
                  onConfirm={(date) => handleDate(date)}
                  onCancel={() => setIsButtonVisible(false)}
                />
              </View>
            </View>
            <Text> {textTime} </Text>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Enviar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
