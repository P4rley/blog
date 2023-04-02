"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Write = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const storyRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [story, setStory] = useState("");

  const MIN_TEXTAREA_HEIGHT = 20;

  useEffect(() => {
    textareaRef.current!.style.height = "10px";

    textareaRef.current!.style.height = `${Math.max(
      textareaRef.current!.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  useEffect(() => {
    storyRef.current!.style.height = "10px";

    storyRef.current!.style.height = `${Math.max(
      storyRef.current!.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [story]);

  return (
    <Container>
      <Title
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
      />
    </Container>
  );
};

export default Write;

const Container = styled.section`
  width: 100%;
  padding: 2rem 20%;
`;
const Title = styled.textarea`
  resize: none;
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: #222;
  font-weight: 600;
  font-family: "Libre Baskerville", serif;
  border: none;
  outline: none;
  letter-spacing: 1.7px;
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
