import React from "react";
import { StyleSheet, TextInput, Image } from "react-native";

import { Container } from "./styles";

import SearchIcon from "../../assets/icons/search.png";

const InputSearch = (props) => {
  return (
    <Container>
      <Image source={SearchIcon} style={{ marginHorizontal: 10 }} />
      <TextInput
        onChangeText={(text) => props.onChangeText(text)}
        style={styles.input}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    height: 40,
    borderRadius: 10,
    width: "90%",
  },
});

export default InputSearch;
