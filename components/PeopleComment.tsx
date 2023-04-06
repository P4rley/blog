"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import React, { FunctionComponent, useRef, useState } from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import styled from "styled-components";

export interface IPeopleComment {}

const PeopleComment: FunctionComponent<IPeopleComment> = () => {
  const [open, setOpen] = useState(false);

  const [like, setLike] = useState<boolean>(false);
  const wrapperRef = useRef("menu");

  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  return (
    <PeopleCommentWrapper>
      <Header>
        <PeopleCommentHeader>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Name>Fulan</Name>
            <Date>11 months ago</Date>
          </div>
        </PeopleCommentHeader>
        <div style={{ position: "relative" }}>
          <MoreIcon ref={wrapperRef}>
            <BsThreeDots
              style={{ cursor: "pointer" }}
              fontSize={20}
              onClick={() => setOpen(!open)}
            />
          </MoreIcon>

          {open && (
            <Dropdown>
              <List>Report</List>
            </Dropdown>
          )}
        </div>
      </Header>

      <Comment>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas unde
        dolore consequuntur quo maiores molestias ad facilis velit illum
        recusandae, soluta accusantium tempore similique distinctio. Perferendis
        quos aut quasi mollitia labore porro quis expedita alias, accusantium
        voluptatibus. Ipsa, soluta sit. Consectetur tenetur sequi suscipit ipsa
        expedita, facilis laborum consequuntur dolorem.
      </Comment>

      <PeopleReaction>
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
      </PeopleReaction>
    </PeopleCommentWrapper>
  );
};

export default PeopleComment;

const PeopleCommentWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PeopleCommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Date = styled.div`
  font-size: 12px;
  color: #959595;
  font-weight: 500;
`;
const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #222;
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
`;

const Dropdown = styled.ul`
  position: absolute;
  padding: 0.5rem;
  background-color: #fff;
  top: 30px;
  right: -20px;
  left: -30px;
  border-radius: 10px;
  text-align: center;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.4));
  z-index: 1;

  &:after {
    background-color: #fff;

    content: "";
    display: flex;
    height: 10px;
    position: absolute;
    transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    width: 10px;
    top: -5px;
    left: 50%;
    overflow: hidden;
  }
`;
const List = styled.li`
  font-size: 12px;
  margin: 0.5rem 0;
  font-weight: 500;
  cursor: pointer;
  color: #8a8a8a;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #222;
  }
`;
const Comment = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 1rem 0;
  line-height: 1.5;
  color: #222;
`;
const PeopleReaction = styled.div``;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #222;
`;

const Number = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #222;
`;
