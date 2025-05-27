import { Options } from "@/widgets/options";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const SettingsPage = () => {
  return (
    <Container>
      <Options />
    </Container>
  );
};
