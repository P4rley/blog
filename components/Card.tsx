import Image from "next/image";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import {
  AiTwotoneLike,
  AiTwotoneDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";

export interface ICard {}

const Card: FunctionComponent<ICard> = () => {
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);

  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };
  const handleDislike = () => {
    if (dislike) {
      setDislike(false);
    } else {
      setDislike(true);
    }
  };

  return (
    <Container>
      <UpperCard>
        <Image
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
          width={30}
          height={30}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Name>Fulan</Name>
        <Circle></Circle>
        <Date>January 24 2023</Date>
      </UpperCard>
      <Content>
        <Left>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae.
          </Title>
          <Synopsis>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            quidem quasi a similique dignissimos quae beatae odio molestias
            obcaecati laudantium. Saepe fugiat tenetur est ratione. Ipsa odit
            dolores cupiditate minus.
          </Synopsis>
        </Left>
        <Right>
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            width={130}
            height={130}
            style={{
              objectFit: "cover",
            }}
          />
        </Right>
      </Content>
      <BelowCard>
        <Tag>Javascript</Tag>
        <IconWrapper>
          {like ? (
            <AiTwotoneLike
              fontSize={25}
              onClick={() => setLike(!like)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AiOutlineLike
              fontSize={25}
              onClick={() => setLike(!like)}
              style={{ cursor: "pointer" }}
            />
          )}
          <Number>60</Number>
        </IconWrapper>
        <IconWrapper>
          {dislike ? (
            <AiTwotoneDislike
              fontSize={25}
              onClick={handleDislike}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AiOutlineDislike
              fontSize={25}
              onClick={handleDislike}
              style={{ cursor: "pointer" }}
            />
          )}
          <Number>60</Number>
        </IconWrapper>
      </BelowCard>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;
const UpperCard = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.p`
  margin-right: 0.5rem;
  margin-left: 1rem;
  color: #8c8c8c;
  font-size: 0.85rem;
  font-weight: 400;
`;
const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #8c8c8c;
`;
const Date = styled.p`
  margin-left: 0.5rem;
  color: #8c8c8c;
  font-size: 0.85rem;
  font-weight: 400;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem 0;
  gap: 50px;
`;
const Title = styled.h2`
  color: #222;
  font-weight: 800;
  font-size: 1.7rem;
`;
const Synopsis = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.6px;
  font-family: "Libre Baskerville", serif;
`;
const Left = styled.div``;
const Right = styled.div``;
const BelowCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Tag = styled.p`
  background-color: #d9d9d9;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Number = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
