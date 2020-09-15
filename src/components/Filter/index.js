import React, { useState, useCallback } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { Language, Module, Title } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import dataLanguage from "../../data/Language";
import dataModule from "../../data/Module";

const Filter = (props) => {
  // Language

  const renderLanguage = useCallback(({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => props.filterLanguage(item.language)}
      >
        <Language>
          <Text>{item.language}</Text>
        </Language>
      </TouchableWithoutFeedback>
    );
  }, []);

  const keyExtractorLanguage = useCallback((item) => item.language, []);

  const getItemLayoutLanguage = useCallback(
    (data, index) => ({ length: 100, offset: 100 * index, index }),
    []
  );

  // Module

  const renderdataModule = useCallback(({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => props.filterModule(item.module)}>
        <Module>
          <Text>{item.module}</Text>
        </Module>
      </TouchableWithoutFeedback>
    );
  }, []);

  const keyExtractordataModule = useCallback((item) => item.module, []);

  const getItemLayoutdataModule = useCallback(
    (data, index) => ({ length: 100, offset: 100 * index, index }),
    []
  );

  return (
    <>
      {/* Modal Overlay */}

      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.overlay}
        ></TouchableOpacity>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.overlay2}
        ></TouchableOpacity>
        <View style={styles.modal}>
          <View>
            <Title>Language</Title>
            <FlatList
              data={dataLanguage}
              renderItem={renderLanguage}
              keyExtractor={keyExtractorLanguage}
              horizontal
              showsHorizontalScrollIndicator={false}
              maxToRenderPerBatch={10}
              getItemLayout={getItemLayoutLanguage}
            />
          </View>

          <Title>Module</Title>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: "60%", height: "80%" }}>
              <FlatList
                data={dataModule}
                renderItem={renderdataModule}
                keyExtractor={keyExtractordataModule}
                showsVerticalScrollIndicator={false}
                getItemLayout={getItemLayoutdataModule}
              />
            </View>
          </View>
          <LinearGradient
            colors={["rgba(255,255,255,0)", "#fff"]}
            style={styles.gradient}
          ></LinearGradient>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 999,
    height: 400,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
  },

  overlay: {
    flex: 1,
    position: "absolute",
    zIndex: 998,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
  },

  overlay2: {
    flex: 1,
    position: "absolute",
    zIndex: 998,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    zIndex: 5555,
    marginTop: -50,
  },
});

export default Filter;
