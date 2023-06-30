import React, { useState, useEffect,useContext } from "react";
import styled from "styled-components";
import { BsListUl } from "react-icons/bs";
import { GrCatalog } from "react-icons/gr";
import { FaArchive } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdPostAdd } from "react-icons/md";
import { GiHamburgerMenu, GiBookPile } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { HiUsers } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import scrollreveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";


export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState();
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const {setSearchPage} = useContext(UserContext)

  const changer =()=>{
    setCurrentLink(2)
    setSearchPage("etudiant")
  }

  const changerCat =()=>{
    setCurrentLink(6)
    setSearchPage("document")
  }

  const changerReserv =()=>{
    setCurrentLink(4)
    setSearchPage("ras")
  }

  const changerEmprunt =()=>{
    setCurrentLink(5)
    setSearchPage("ras")
  }

  const changerMsg =()=>{
    setCurrentLink(7)
    setSearchPage("ras")
  }
  
  const changerArch =()=>{
    setCurrentLink(8)
    setSearchPage("archives")
  }

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .links>ul>li:nth-of-type(8),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brandSide">
            <a href="/">
                <GiBookPile />
                <span>ENSPY</span>
            </a>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
            <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => changerCat()}
              >
                <NavLink className="linkin" to="/catalogue" end>
                  <GrCatalog />
                  <span>Catalogue</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() =>changer()}
              >
                
                <NavLink className="linkin" to="/listeEtudiant" end>
                  <HiUsers />
                  <span>Etudiants inscrits</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                
                <NavLink className="linkin" to="/ajouterDoc" end>
                  <MdPostAdd />
                  <span>Ajouter documents</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => changerReserv()}
              >
                <NavLink className="linkin"  to="/listeReservation" end>
                  <BsListUl />
                  <span>Liste de reservations</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => changerEmprunt()}
              >
                <NavLink className="linkin" to="/emprunts" end>
                  <BsListUl />
                  <span>Livres emprumtés</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => changerMsg()}
              >
                <NavLink className="linkin" to="/messages" end>
                    <AiFillMessage />
                    <span>Messages</span>
                  </NavLink>
              </li>
              <li
                className={currentLink === 8 ? "active" : "none"}
                onClick={() => changerArch()}
              >
                <NavLink className="linkin" to="/archives" end>
                    <FaArchive />
                    <span>Archives</span>
                  </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <NavLink className="linkin">
            <FiLogOut />
            <span className="logout">Deconnexion</span>
          </NavLink>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
          <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => changerCat()}
              >
                <NavLink className="linkin" to="/catalogue" end>
                  <GrCatalog />
                  <span>Catalogue</span>
                </NavLink>
              </li>
          <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() =>changer()}
              >
                
                <NavLink className="linkin" to="/listeEtudiant" end>
                  <HiUsers />
                  <span>Etudiants inscrits</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                
                <NavLink className="linkin" to="/ajouterDoc" end>
                  <MdPostAdd />
                  <span>Ajouter documents</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => changerReserv()}
              >
                <NavLink className="linkin"  to="/listeReservation" end>
                  <BsListUl />
                  <span>Liste de reservations</span>
                </NavLink>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => changerEmprunt()}
              >
                <NavLink className="linkin" to="/emprunts" end>
                  <BsListUl />
                  <span>Livres emprumtés</span>
                </NavLink>
              </li>
              
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => changerMsg()}
              >
                <NavLink className="linkin" to="/messages" end>
                    <AiFillMessage />
                    <span>Messages</span>
                  </NavLink>
              </li>
              <li
                className={currentLink === 8 ? "active" : "none"}
                onClick={() => changerArch()}
              >
                <NavLink className="linkin" to="/archives" end>
                    <FaArchive />
                    <span>Archives</span>
                  </NavLink>
              </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  border-top-right-radius: 53px;
  border-bottom-right-radius: 53px;
  background-color: #fff;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brandSide a{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      text-decoration: none;
      svg {
        color: #fe7a3f;
        font-size: 3rem;
      }
      span {
        font-size: 2rem;
        color: #fe7a3f;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          border-radius: 0.6rem;
          &:hover {
            background-color: #ececec;
            .linkin {
              color: #fe7a3f;
            }
          }
          .linkin {
            padding: 0.6rem 1rem;
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: grey;
          }
        }
        .active{
          background-color: #ececec;
          .linkin {
            color: #fe7a3f;
            border-radius: 0.6rem;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    .linkin {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: grey;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: black;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60vh" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 1;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        border-radius: 0.6rem;
        &:hover {
          background-color: #fe7a3f;
          .linkin {
            color: black;
          }
        }
        .linkin {
          padding: 0.6rem 1rem;
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #fe7a3f;
        .linkin {
          border-radius: 0.6rem;
          color: black;
        }
      }
    }
  }
`;