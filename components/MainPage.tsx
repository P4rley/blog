"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "./Card";

export interface IMainPage {}

const data = [
  {
    title: "Test Slug 1",
    slug: "Test Slug 1"
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  },
  {
    title: "Test Slug 2",
    slug: "Test Slug 2"
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  },
  {
    title: "Test Slug 3",
    slug: "Test Slug 3"
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  },
];

const MainPage: FunctionComponent<IMainPage> = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((el, i) => {
          return <Card key={i} slug={el.slug} title={el.title} />;
        })}
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
