import { useState } from "react";
import { Switch, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const Thumb = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export default function SettingsPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Thumb>
        <Text style={{ marginRight: 5 }}>Enable 1</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </Thumb>
    </Container>
  );
}
