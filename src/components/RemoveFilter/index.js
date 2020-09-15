import React from "react";
import { Text, TouchableWithoutFeedback, Image } from "react-native";

import { Filter, Row } from "./styles";
import Close from "../../assets/icons/close.png";

const RemoveFilter = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onPress()}>
      <Filter>
        <Row>
          <Text style={{ color: "#fff" }}>{props.filter}</Text>
          <Image
            source={Close}
            style={{ height: 10, width: 10, marginLeft: 10 }}
          />
        </Row>
      </Filter>
    </TouchableWithoutFeedback>
  );
};

export default RemoveFilter;
