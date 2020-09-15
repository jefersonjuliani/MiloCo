import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Container } from "./styles";

const Content = ({ children }) => {
  return (
    <Container>
      <LinearGradient colors={["#515151", "#5F8E77"]} style={{ flex: 1 }}>
        {children}
      </LinearGradient>
    </Container>
  );
};

export default Content;
