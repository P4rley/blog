"use client";

import { Router } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";

const Notification = () => {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return <Container>Notification</Container>;
};

export default Notification;

const Container = styled.section`
  height: 100vh;
`;
