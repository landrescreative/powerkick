import React, { useState } from "react";
import styled from "styled-components";

// Icons
import { FaBars } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container_Navbar>
      <div className={toggle ? "active" : ""}>
        <a href="#">HOME</a>
        <a href="#">PRODUCTS</a>
        <a href="#">ABOUT US</a>
      </div>
      <h1>POWERKICK</h1>
      <div className="icons">
        <IoSearch />
        <FaBagShopping />
        <FaUser />
      </div>
      <button
        className={toggle ? "active" : ""}
        onClick={() => setToggle(!toggle)}
      >
        <FaBars />
      </button>
    </Container_Navbar>
  );
};

const Container_Navbar = styled.div`
  width: 100vw;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
  background-color: #f2f2f2;
  z-index: 100;
  font-family: ${(props) => props.theme.fonts.primary};

  // ICONS
  .icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column: 11 / 13;
    z-index: 1;
    color: ${(props) => props.theme.colors.black};

    // Media queries
    @media (max-width: 1024px) {
      display: none;
    }

    svg {
      font-size: 1.5rem;
      color: #000000;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        transform: scale(1.1);
      }
    }
  }

  // LANDRES text

  h1 {
    font-size: 22px;
    font-weight: 900;
    grid-column: 4/10;
    text-align: center;
    letter-spacing: 0px;
    align-self: center;
    color: ${(props) => props.theme.colors.black};

    @media (max-width: 1024px) {
      grid-column: 1 / 8;
      display: none;
    }
  }

  div:nth-child(1) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column: 1/4;
    z-index: 1;

    // Media queries
    @media (max-width: 1024px) {
      width: 100vw;
      height: 100dvh;
      flex-direction: column;
      justify-content: space-around;
      position: fixed;
      right: -100vw;
      background-color: ${(props) => props.theme.colors.primary};
      transition: right 0.5s ease-in-out;
    }

    // LINKS TEXT

    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      color: ${(props) => props.theme.colors.black};
      transition: all 0.5s ease-in-out;
      transform: scale(1);

      @media (max-width: 1024px) {
        color: #ffffff;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        right: 0;
        width: 0;
        height: 2px;
        background-color: ${(props) => props.theme.colors.primary};
        transition: width 0.3s ease-in-out;
      }

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        transform: scale(1.1);
      }

      &:hover::after {
        width: 100%;
      }

      // Media queries
    }

    &.active {
      @media (max-width: 1024px) {
        right: 0;
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    color: #000000;
    grid-column: 11 / 13;
    justify-self: center;
    z-index: 1;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    // Media queries
    @media (min-width: 1024px) {
      display: none;
    }

    &.active {
      transform: rotate(90deg);
      color: #ffffff;
    }
  }
`;

export default Navbar;
