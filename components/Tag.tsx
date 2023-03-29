import { FunctionComponent } from "react";
import styled from "styled-components";

export interface ITag {
  name: string;
}

const Tag: FunctionComponent<ITag> = ({ name }) => {
  return <TagName>{name}</TagName>;
};

export default Tag;

const TagName = styled.p`
  background-color: #efefef;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: #2e2e2e;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: black;
  }
`;
