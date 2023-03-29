"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Tag from "./Tag";

export interface ISidebar {}

const Sidebar: FunctionComponent<ISidebar> = () => {
  return (
    <Container>
      <Wrapper>
        <RecomendationWrapper>
          <SubTitle>Recomended Picks</SubTitle>
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
        <div style={{ margin: "3rem 0" }}>
          <SubTitle>Recomended Topics</SubTitle>
          <RecomendationTopics>
            <Tag name={"Javascript"} />
            <Tag name={"UI/UX"} />
            <Tag name={"Product Management"} />
            <Tag name={"Machine Learning"} />
            <Tag name={"Money"} />
          </RecomendationTopics>
        </div>
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
const Name = styled.p`
  color: #222;
  font-size: 1rem;
  font-weight: 500;
`;
const Title = styled.h3`
  color: #222;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;
`;
const RecomendationTopics = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem 0;
`;
const SubTitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1em;
`;
