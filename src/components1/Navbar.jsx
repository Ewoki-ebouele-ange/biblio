import React,{useContext, useState,} from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { UserContext } from "../App";



export default function Navbar() {

  const {searchPage,searchWord, setSearchWord} = useContext(UserContext)
  return (
    <Nav>
      <div className="titleNav">
        <h1>
          Welcome to <span>BIBLIO ENSPY</span>
        </h1>
      </div>
      {  searchPage==="etudiant" ?
        <>
      <div className="search">
        <BiSearch />
        <input onChange={(e) => setSearchWord(e.target.value)} value={searchWord}  type="text" placeholder="Search etudiant" />
      </div>
      </>:
       searchPage==="document" ?
      <>
    <div className="search">
      <BiSearch />
      <input  onChange={(e) => setSearchWord(e.target.value)} value={searchWord} type="text" placeholder="Search Document" />
    </div>
    </> :
    searchPage==="archives" ?
    <>
    <div className="search">
      <BiSearch />
      <input  onChange={(e) => setSearchWord(e.target.value)} value={searchWord} type="text" placeholder="Search Document" />
    </div>
    </> :
    <div>

    </div>
            }

    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: black;
  background-color:#ececec;
  .titleNav {
    h1 {
      span {
        margin-left: 0.5rem;
        color: black;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    height: 50px;
    svg {
      color: #000;
    }
    input {
      background-color: transparent;
      border: none;
      color: #000;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #000;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;