import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ImagePropTypes,
} from "react-native";
import FilterIcon from "../../assets/icons/filter.png";

const FilterButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.Button}>
      <Image source={FilterIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 45,
    backgroundColor: "#5D5D5D",
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default FilterButton;
