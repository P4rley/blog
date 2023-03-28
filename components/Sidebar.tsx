"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";

export interface ISidebar {}

const Sidebar: FunctionComponent<ISidebar> = () => {
  return (
    <Container>
      <Wrapper>
        <RecomendationWrapper>
          <Box>
            <Profile>
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Name>Fulan</Name>
            </Profile>
            <Title>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, magnam!
            </Title>
          </Box>
        </RecomendationWrapper>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  position: relative;
  flex: 1;
`;

const Wrapper = styled.div`
  position: fixed;
  max-width: 400px;
  right: 8rem;
`;
const RecomendationWrapper = styled.div``;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Box = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding: 1rem 0;
`;
const Name = styled.p``;
const Title = styled.h3`
  color: #222;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;
`;
