import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  AiTwotoneLike,
  AiOutlineLike,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import {
  BsBookmarkPlus,
  BsFillBookmarkFill,
  BsThreeDots,
} from "react-icons/bs";
import Tag from "./Tag";
import useClickOutside from "@/hooks/useClickOutside";
import Link from "next/link";

export interface ICard {
  title: string;
  slug: string;
}

const Card: FunctionComponent<ICard> = ({ title, slug }) => {
  const [like, setLike] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  let [open, setOpen] = useState(false);
  const wrapperRef = useRef("menu");

  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
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
        <Left href={slug}>
          <Title>{title}</Title>
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
        <BelowCardLeft>
          <Tag name={"Javascript"} />
          <IconWrapper>
            {like ? (
              <AiTwotoneLike
                fontSize={20}
                onClick={() => setLike(!like)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <AiOutlineLike
                fontSize={20}
                onClick={() => setLike(!like)}
                style={{ cursor: "pointer" }}
              />
            )}
            <Number>60</Number>
          </IconWrapper>
        </BelowCardLeft>
        <BelowCardRight>
          <Bookmark style={{ cursor: "pointer" }}>
            {bookmarked ? (
              <BsFillBookmarkFill
                fontSize={20}
                onClick={() => setBookmarked(!bookmarked)}
              />
            ) : (
              <BsBookmarkPlus
                fontSize={20}
                onClick={() => setBookmarked(!bookmarked)}
              />
            )}
            <BookmarkTitle>Save</BookmarkTitle>
          </Bookmark>
          <ShowLess>
            <AiOutlineMinusCircle fontSize={20} />

            <ButtonTitle>Show less like this</ButtonTitle>
          </ShowLess>
          <More>
            <MoreIcon ref={wrapperRef}>
              <BsThreeDots
                style={{ cursor: "pointer" }}
                fontSize={20}
                onClick={() => setOpen(!open)}
              />
              <BookmarkTitle>More</BookmarkTitle>
            </MoreIcon>

            {open && (
              <Dropdown>
                <List>Mute this author</List>
                <List>Mute this publication</List>
                <List>Report</List>
              </Dropdown>
            )}
          </More>
        </BelowCardRight>
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
  color: #222;
  font-size: 1rem;
  font-weight: 500;
`;
const Circle = styled.div`
  width: 3px;
  height: 3px;
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
  font-family: "Libre Baskerville", serif;
`;
const Synopsis = styled.p`
  margin: 1rem 0;
  font-size: 0.85em;
  font-weight: 400;
  line-height: 1.5;
  color: #222;
`;
const Left = styled(Link)``;
const Right = styled.div``;
const BelowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BelowCardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const BelowCardRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #222;
`;

const Number = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #222;
`;
const ButtonTitle = styled.span`
  display: none;
  font-size: 12px;
  background-color: #222;
  padding: 0.5rem;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  position: absolute;
  top: -60px;
  left: -50px;
  right: -40px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #222;
    left: 45%;
    bottom: -8px;
  }
`;

const BookmarkTitle = styled(ButtonTitle)`
  top: -45px;
  left: -30px;
  right: -20px;
  margin-left: 7px;
  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #222;
    left: 38%;
    bottom: -8px;
  }
`;

const Bookmark = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #aaaaaa;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #222;
  }

  &:hover ${BookmarkTitle} {
    display: block;
  }
`;

const ShowLess = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  color: #aaaaaa;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #222;
  }

  &:hover ${ButtonTitle} {
    display: block;
  }
`;

const More = styled.div`
  position: relative;
`;

const MoreIcon = styled.div<{ ref: any }>`
  color: #aaaaaa;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: #222;
  }

  &:hover ${BookmarkTitle} {
    display: block;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  padding: 1rem;
  background-color: #fff;
  top: 35px;
  right: -80px;
  left: -80px;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.4));
  z-index: 1;

  &:after {
    background-color: #fff;

    content: "";
    display: flex;
    height: 20px;
    position: absolute;
    transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    width: 20px;
    top: -9px;
    left: 43%;
    overflow: hidden;
  }
`;
const List = styled.li`
  font-size: 14px;
  margin: 0.5rem 0;
  font-weight: 500;
  cursor: pointer;
  color: #8a8a8a;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #222;
  }
`;
