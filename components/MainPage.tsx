"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "./Card";

export interface IMainPage {}

const MainPage: FunctionComponent<IMainPage> = () => {
  return (
    <Container>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default MainPage;

const Container = styled.section`
  flex: 2;
  padding: 2rem;
  position: relative;
  border-right: 1px solid #eeeeee;
`;

const Wrapper = styled.div``;
