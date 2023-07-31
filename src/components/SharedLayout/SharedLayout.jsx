import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  padding: 0px 20px;
`;

export const SharedLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
