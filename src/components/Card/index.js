import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Container, Line, Row, Resource, Value, DataTimeText } from "./styles";
import moment from "moment";
import Calendar from "../../assets/icons/calendar.png";
import Clock from "../../assets/icons/clock.png";

const Card = ({ data }) => {
  var day = moment(data.updated_at).format("MM/DD/YYYY");
  var hour = moment(data.updated_at).format(" hh:MM");

  return (
    <Container>
      <View style={styles.aligncontent}>
        <Row style={styles.alignLine}>
          <Line />
          <View style={styles.alignText}>
            <Resource>Resource: {data.resource_id}</Resource>
            <Value>{data.value}</Value>
          </View>
        </Row>
        <Row style={{ paddingTop: 10 }}>
          <Row style={styles.alingDataTime}>
            <Image source={Calendar} />
            <DataTimeText>{day}</DataTimeText>
          </Row>
          <Row style={styles.alingDataTime}>
            <Image source={Clock} />
            <DataTimeText>{hour}</DataTimeText>
          </Row>
        </Row>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  aligncontent: {
    flex: 1,
    marginLeft: 30,
    justifyContent: "center",
  },
  alignLine: {
    alignItems: "center",
  },
  alignText: {
    width: "90%",
    marginLeft: 10,
    justifyContent: "center",
  },
  alingDataTime: {
    flex: 1,
    alignItems: "center",
  },
});

export default Card;
