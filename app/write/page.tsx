"use client";

import {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const Write = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const storyRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [story, setStory] = useState("");

  const MIN_TEXTAREA_HEIGHT = 20;

  useEffect(() => {
    const handleChange = () => {
      setHide(true);

      if (hide) {
        setTitle(titleRef.current!.innerText);
      }

      if (!title) {
        setHide(false);
      }
    };

    window.addEventListener("input", handleChange);

    return () => window.removeEventListener("input", handleChange);
  }, [hide, title]);

  console.log(hide);

  // useEffect(() => {
  //   textareaRef.current!.style.height = "10px";

  //   textareaRef.current!.style.height = `${Math.max(
  //     textareaRef.current!.scrollHeight,
  //     MIN_TEXTAREA_HEIGHT
  //   )}px`;
  // }, [value]);

  // useEffect(() => {
  //   storyRef.current!.style.height = "10px";

  //   storyRef.current!.style.height = `${Math.max(
  //     storyRef.current!.scrollHeight,
  //     MIN_TEXTAREA_HEIGHT
  //   )}px`;
  // }, [story]);

  return (
    <Container>
      <TitleWrapper>
        {/* <Title contentEditable="true" ref={titleRef} className="Title"></Title>
        <Placeholder
          className="placeholder"
          style={{ display: hide ? "none" : "block" }}
        >
          Title
        </Placeholder> */}
      </TitleWrapper>

      {/* <Title
        placeholder="Title"
        onChange={(e) => setValue(e.target.value)}
        ref={textareaRef}
        style={{
          minHeight: MIN_TEXTAREA_HEIGHT,
          resize: "none",
        }}
        value={value}
      />
      <Textarea
        placeholder="Write your story"
        onChange={(e) => setStory(e.target.value)}
        style={{
          minHeight: MIN_TEXTAREA_HEIGHT,
          resize: "none",
        }}
        ref={storyRef}
      /> */}
    </Container>
  );
};

export default Write;

const Container = styled.section`
  width: 100%;
  padding: 2rem 20%;
`;
const TitleWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
`;
const Title = styled.h3`
  font-size: 2rem;
  color: #222;
  font-weight: 600;
  font-family: "Libre Baskerville", serif;
  border: none;
  outline: none;
  z-index: 1;
`;
const Placeholder = styled.span`
  font-size: 2rem;
  font-weight: 500;
  font-family: "Libre Baskerville", serif;
  color: #999999;
  bottom: 15px;
  position: absolute;
`;
const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 1rem;
  font-size: 14px;
  color: #222;
  font-weight: 500;
  font-family: "Libre Baskerville", serif;
  border: none;
  outline: none;
  letter-spacing: 1px;
  overflow: hidden;
`;
