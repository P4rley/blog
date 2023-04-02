"use client";


import { FunctionComponent } from "react";
import styled from "styled-components";

export interface ISlug {
  params: {
    slug: string;
  };
}

const DetailPage: FunctionComponent<ISlug> = ({ params }) => {
  const { slug } = params;

  return <Container>Hai</Container>;
};

export default DetailPage;

const Container = styled.section`
  padding: 2rem 8rem;
`;
