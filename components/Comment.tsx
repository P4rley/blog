"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import PeopleComment from "./PeopleComment";

export interface IComment {
  openComment: boolean;
  setOpenComment: (val: boolean) => void;
}

const Comment: FunctionComponent<IComment> = ({
  openComment,
  setOpenComment,
}) => {
  const [comment, setComment] = useState<string>("");
  const [showBox, setShowBox] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const MIN_TEXTAREA_HEIGHT = 20;

  useEffect(() => {
    textareaRef.current!.style.height = "20px";

    textareaRef.current!.style.height = `${Math.max(
      textareaRef.current!.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [comment, textareaRef]);

  return (
    <Container open={openComment}>
      <Wrapper open={openComment}>
        <Header>
          <Responses>Responses (10)</Responses>
          <CloseWrapper onClick={() => setOpenComment(false)}>
            <IoMdClose />
          </CloseWrapper>
        </Header>

        <CommentWrapper show={showBox}>
          <Profile show={showBox}>
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
          </Profile>

          <CommentInput
            show={showBox}
            onChange={(e) => setComment(e.target.value)}
            onClick={() => setShowBox(true)}
            value={comment}
            placeholder="What are your thoughts?"
            ref={textareaRef}
            style={{
              minHeight: MIN_TEXTAREA_HEIGHT,
              resize: "none",
            }}
          />

          <CommentAction show={showBox}>
            <Cancel
              onClick={() => {
                setComment("");
                textareaRef.current!.style.height = "20px";
                setShowBox(false);
              }}
            >
              Cancel
            </Cancel>
            <Submit disabled={!comment ? true : false}>Respond</Submit>
          </CommentAction>
        </CommentWrapper>

        <hr
          style={{
            border: "1px solid #dbdbdb",
            width: "100%",
            borderRadius: "10px",
            margin: "1rem 0",
          }}
        />

        <PeopleComment />
        <PeopleComment />
        <PeopleComment />
      </Wrapper>
    </Container>
  );
};

export default Comment;

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: ${({ open }) => (open ? 1000 : -5)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 1s cubic-bezier(0.7, 0, 0.2, 1);
`;
const Wrapper = styled.div<{ open: boolean }>`
  background-color: #fff;
  width: 500px;
  height: 100%;
  padding: 2rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  overflow-y: scroll;
  transform: ${({ open }) =>
    open
      ? "translate(0,0) skew(0)"
      : "translate(calc(100% + 10vw), 0) skew(20deg)"};
  transition: all 1s cubic-bezier(0.7, 0, 0.2, 1);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Responses = styled.h3`
  color: #222;
  font-weight: 700;
  font-size: 18px;
`;
const CloseWrapper = styled.div`
  font-size: 25px;
  color: #4a4a4a;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #222;
  }
`;
const CommentWrapper = styled.div<{ show: boolean }>`
  padding: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  margin: 2rem 0;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
`;
const Profile = styled.div<{ show: boolean }>`
  display: flex;
  height: ${({ show }) => (!show ? "0" : "100%")};
  overflow: hidden;
  align-items: center;
  gap: 10px;
  opacity: ${({ show }) => (!show ? "0" : "1")};
  transition: all 0.5s ease-in-out;
`;
const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;
const CommentInput = styled.textarea<{ show: boolean }>`
  width: 100%;
  border: none;
  outline: none;
  overflow: hidden;
  margin: ${({ show }) => (!show ? "0" : "1.5rem 0")};
  height: ${({ show }) => (!show ? "20px" : "100%")};
  transition: all 0.5s ease-in-out;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;
const CommentAction = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (!show ? "0" : "1")};
  display: flex;
  height: ${({ show }) => (!show ? "0" : "100%")};
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;
const Cancel = styled.button`
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background-color: #fff;
  color: #222;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
  }
`;
const Submit = styled.button`
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background-color: #54b435;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  color: #fff;

  &:hover {
    background-color: #379237;
  }

  &:disabled {
    background-color: rgba(84, 180, 53, 0.5);
    cursor: not-allowed;
  }
`;
