"use client";

import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import styles from "../style/Navbar.module.css";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { RxPencil2 } from "react-icons/rx";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export interface INavbar {}

const Navbar: FunctionComponent<INavbar> = () => {
  const [click, setClick] = useState<boolean>(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Container show={visible}>
      <Wrapper>
        <Link href="/" className={styles.logo}>
          Tell
        </Link>
        <SearchWrapper>
          <FaSearch fontSize={20} color="#222" />
          <Input type="search" placeholder="Search..." />
        </SearchWrapper>
        <Right>
          <IconLink href="/write" click={click}>
            <RxPencil2 fontSize={25} />
          </IconLink>
          <IconLink href="/notifications" click={click}>
            <FaRegBell fontSize={25} />
          </IconLink>
          <Menu>
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
            <IoIosArrowDown fontSize={20} />
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.section<{ show: boolean }>`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  position: sticky;
  top: ${({ show }) => (show ? "0" : "")};
  background-color: #fff;
  z-index: 99;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  position: relative;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 40px;
  border: 2px solid transparent;
  padding: 0.5rem;
  background-color: #f0f0f0;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border: 2px solid #222 !important;
  }

  &:hover {
    border: 2px solid #767676;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 1rem;
  background-color: transparent;
`;

const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 3rem;
  overflow-x: hidden;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #767676;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #222;
  }
`;

const IconLink = styled(Link)<{ click: boolean }>`
  color: #767676;
  transition: all 0.3s ease-in-out;
  margin-right: 1.5rem;

  &:hover {
    color: ${({ click }) => (click ? "#DEDEDE" : "#222")};
  }
`;
