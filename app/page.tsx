"use client";

import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Scroll from "@/pages/Scrollbar";

import styled from "styled-components";

export default function Home() {
  return (
    <Container className="">
      <MainPage />
      <Sidebar />
    </Container>
  );
}

const Container = styled.section`
  padding: 0rem 8rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;
