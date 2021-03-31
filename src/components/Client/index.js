import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import DatePicker from "@dietime/react-native-date-picker";
import useFetch from "../../hook/useFetch";
import format from "date-fns/format";

const initialState = {
  name: null,
  lastname: null,
  birthdate: new Date(),
};

const Client = () => {
  const [loading, onFetch] = useFetch();
  const [form, setForm] = useState(initialState);

  const onChange = ({ nativeEvent: { text } }, name) => {
    setForm({ ...form, [name]: text });
  };

  const onSubmit = async () => {
    if (form) {
      const birthdate = format(form.birthdate, "yyyy-MM-dd");
      onFetch({ form: { ...form, birthdate }, setForm, initialState });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTO DE CLIENTES</Text>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text>Nombres</Text>
          <TextInput
            style={styles.input}
            value={form.name}
            onChange={(event) => onChange(event, "name")}
          />
        </View>
        <View style={styles.formControl}>
          <Text>Apellidos</Text>
          <TextInput
            style={styles.input}
            value={form.lastname}
            onChange={(event) => onChange(event, "lastname")}
          />
        </View>
        <View style={styles.formControl}>
          <Text>Fecha de Nacimiento</Text>
          <DatePicker
            value={form.birthdate}
            onChange={(value) => setForm({ ...form, birthdate: value })}
            format="dd-mm-yyyy"
          />
        </View>
        <View style={styles.formControl}>
          <Button
            disabled={
              form.name !== null && form.lastname !== null
                ? loading
                  ? true
                  : false
                : true
            }
            title={loading ? "REGISTRANDO..." : "REGISTRAR"}
            onPress={onSubmit}
            {...styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default Client;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: "600",
    borderBottomWidth: 1,
  },
  form: {
    display: "flex",
    width: "100%",
  },
  formControl: {
    marginTop: 12,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    padding: 4,
    fontSize: 14,
    borderRadius: 2,
  },
  button: {
    color: "#000",
    borderRadius: 2,
    height: 40,
  },
});
