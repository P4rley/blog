"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useRef, useState } from "react";
import styled from "styled-components";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsLink45Deg,
  BsBookmarkPlus,
  BsFillBookmarkFill,
  BsThreeDots,
} from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineMinusCircle,
  AiOutlineLike,
  AiTwotoneLike,
} from "react-icons/ai";
import { BiMessageRounded, BiPaperPlane } from "react-icons/bi";
import useClickOutside from "@/hooks/useClickOutside";
import Comment from "@/components/Comment";

export interface ISlug {
  params: {
    slug: string;
  };
}

const DetailPage: FunctionComponent<ISlug> = ({ params }) => {
  const { slug } = params;

  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const wrapperRef = useRef("menu");

  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  return (
    <Container>
      <Wrapper>
        <Left>
          <ProfileWrapper>
            <Profile>
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <Name>Fulan</Name>
                <PostDate>20 Mar</PostDate>
              </div>
            </Profile>
            <OptionWrapper>
              <Social>
                <SocialLink href="https://twitter.com/" target="_blank">
                  <BsTwitter fontSize={20} />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/" target="_blank">
                  <AiFillInstagram fontSize={22} />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/" target="_blank">
                  <BsFacebook fontSize={17.5} />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/" target="_blank">
                  <BsLinkedin fontSize={17.5} />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/" target="_blank">
                  <BsLink45Deg fontSize={22} />
                </SocialLink>
              </Social>
              <Option>
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
              </Option>
            </OptionWrapper>
          </ProfileWrapper>

          <Content>
            <Title>Lorem ipsum dolor sit amet, consectetur adipisicing.</Title>
            <MainContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores dolorem rerum. Ratione, expedita, voluptate veritatis cum
              debitis nesciunt, amet non reiciendis numquam rerum doloremque
              ipsa ab? Magnam, consectetur aliquam! Totam nesciunt cupiditate
              nobis, consequatur error perferendis explicabo, repellendus nulla
              soluta earum non architecto neque optio quisquam perspiciatis,
              nemo odit cumque. Ex quia quam blanditiis ducimus accusantium quae
              ea cupiditate pariatur, distinctio molestias nihil magnam
              necessitatibus officia dolore eum expedita numquam officiis eos
              corrupti tempore saepe in autem ad hic! Illum debitis nihil eos
              eveniet eius quaerat possimus, distinctio impedit cupiditate ad
              dolores minus sapiente voluptates culpa deleniti laborum ea!
            </MainContent>
            <MainContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores dolorem rerum. Ratione, expedita, voluptate veritatis cum
              debitis nesciunt, amet non reiciendis numquam rerum doloremque
              ipsa ab? Magnam, consectetur aliquam! Totam nesciunt cupiditate
              nobis, consequatur error perferendis explicabo, repellendus nulla
              soluta earum non architecto neque optio quisquam perspiciatis,
              nemo odit cumque. Ex quia quam blanditiis ducimus accusantium quae
              ea cupiditate pariatur, distinctio molestias nihil magnam
              necessitatibus officia dolore eum expedita numquam officiis eos
              corrupti tempore saepe in autem ad hic! Illum debitis nihil eos
              eveniet eius quaerat possimus, distinctio impedit cupiditate ad
              dolores minus sapiente voluptates culpa deleniti laborum ea!
            </MainContent>
            <MainContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores dolorem rerum. Ratione, expedita, voluptate veritatis cum
              debitis nesciunt, amet non reiciendis numquam rerum doloremque
              ipsa ab? Magnam, consectetur aliquam! Totam nesciunt cupiditate
              nobis, consequatur error perferendis explicabo, repellendus nulla
              soluta earum non architecto neque optio quisquam perspiciatis,
              nemo odit cumque. Ex quia quam blanditiis ducimus accusantium quae
              ea cupiditate pariatur, distinctio molestias nihil magnam
              necessitatibus officia dolore eum expedita numquam officiis eos
              corrupti tempore saepe in autem ad hic! Illum debitis nihil eos
              eveniet eius quaerat possimus, distinctio impedit cupiditate ad
              dolores minus sapiente voluptates culpa deleniti laborum ea!
            </MainContent>
            <MainContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maiores dolorem rerum. Ratione, expedita, voluptate veritatis cum
              debitis nesciunt, amet non reiciendis numquam rerum doloremque
              ipsa ab? Magnam, consectetur aliquam! Totam nesciunt cupiditate
              nobis, consequatur error perferendis explicabo, repellendus nulla
              soluta earum non architecto neque optio quisquam perspiciatis,
              nemo odit cumque. Ex quia quam blanditiis ducimus accusantium quae
              ea cupiditate pariatur, distinctio molestias nihil magnam
              necessitatibus officia dolore eum expedita numquam officiis eos
              corrupti tempore saepe in autem ad hic! Illum debitis nihil eos
              eveniet eius quaerat possimus, distinctio impedit cupiditate ad
              dolores minus sapiente voluptates culpa deleniti laborum ea!
            </MainContent>
          </Content>

          <FloatingContainer>
            <FloatingWrapper>
              <IconWrapper>
                {like ? (
                  <AiTwotoneLike
                    fontSize={20}
                    onClick={() => setLike(!like)}
                    style={{ cursor: "pointer", color: "#222" }}
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
              <hr
                style={{
                  border: "1px solid #c3c3c3",
                  height: "70%",
                  margin: "auto",
                  borderRadius: "20px",
                }}
              />
              <IconWrapper>
                <BiMessageRounded fontSize={20} style={{ cursor: "pointer" }} />
                <Number>60</Number>
              </IconWrapper>
            </FloatingWrapper>
          </FloatingContainer>
        </Left>
        <Right>
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            width={80}
            height={80}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Name
            style={{ fontSize: "18px", marginTop: "20px", marginBottom: "5px" }}
          >
            Fulan
          </Name>

          <Followers>50 Followers</Followers>
          <Expertise>Digital Marketing | UI/UX</Expertise>
          <Action>
            <Follow>Follow</Follow>
            <ActionIcon>
              <BiPaperPlane />
            </ActionIcon>
          </Action>
        </Right>
      </Wrapper>

      <Comment />
    </Container>
  );
};

export default DetailPage;

const Container = styled.section`
  padding: 0 8rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  flex: 2.5;
  position: relative;
  padding: 2rem;
  border-right: 1px solid #eeeeee;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Name = styled.p`
  color: #222;
  font-size: 1rem;
  font-weight: 500;
`;
const PostDate = styled.p`
  color: #222;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
`;
const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const SocialLink = styled(Link)`
  color: #aaaaaa;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #222;
  }
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ButtonTitle = styled.span`
  display: none;
  font-size: 10px;
  background-color: #222;
  padding: 0.5rem;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  position: absolute;
  top: -40px;
  left: -55px;
  right: -43px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  margin-left: 5px;

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
const BookmarkTitle = styled.span`
  display: none;
  font-size: 12px;
  background-color: #222;
  padding: 0.5rem;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  position: absolute;
  top: -45px;
  left: -30px;
  right: -20px;
  margin-left: 7px;
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
const Content = styled.div`
  margin: 4rem 0;
`;
const Title = styled.h2`
  font-size: 2.2em;
  font-weight: 700;
  color: #222;
  font-family: "Libre Baskerville", serif;
`;
const MainContent = styled.p`
  font-size: 1.2em;
  margin: 1rem 0;
  line-height: 1.5;
  font-weight: 400;
`;
const FloatingContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 28%;
`;
const FloatingWrapper = styled.div`
  display: flex;
  padding: 0.7rem 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  background-color: #fff;
  z-index: 1;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #7c7c7c;
  transition: all 0.4s ease-in-out;
  margin: 0 10px;

  &:hover {
    color: #222;
  }
`;
const Number = styled.p`
  font-size: 14px;
  font-weight: 400;

  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Expertise = styled.p`
  font-size: 16px;
  color: #737373;
  font-weight: 500;
  margin: 10px 0;
`;
const Followers = styled.p`
  font-size: 16px;
  color: #737373;
  font-weight: 500;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;
const Follow = styled.p`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: #424267;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #353554;
  }
`;
const ActionIcon = styled.div`
  color: #424267;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #353554;
    font-size: 25px;
  }
`;
