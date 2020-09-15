import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import api from "../../service/api";

import Content from "../../components/Content";
import Logo from "../../assets/icons/logo.png";

const loading = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();

  //Funcões executadas quando o componente é montado
  useEffect(() => {
    getData();
  }, []);

  //Get Data

  const getData = async () => {
    await api
      .get("/get_resources_since", {
        onDownloadProgress: (progressEvent) => {
          const total = parseFloat(
            progressEvent.currentTarget.responseHeaders["Content-Length"]
          );
          const current = progressEvent.currentTarget.response.length;

          let percentCompleted = Math.floor((current / total) * 100);
          setProgress(percentCompleted);
        },
      })
      .then((response) => {
        dispatch({ type: "ADD_DATA", payload: response.data });
        navigation.navigate("Main");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.responderEnd);
        }
      });
  };
  return (
    <Content>
      <View style={[styles.container]}>
        <Image source={Logo} style={{ marginBottom: 30 }} />
        <ActivityIndicator size="large" color="#7DDCA1" />
        <Text style={{ color: "#fff" }}>{progress}</Text>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default loading;
