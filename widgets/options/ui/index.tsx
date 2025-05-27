import React from "react";
import { Switch, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Options = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Text style={{ marginRight: 5 }}>Enable 1</Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </Container>
  );
};
