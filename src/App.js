import React, { useState, useEffect,createContext } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import styled from "styled-components";
import Sidebar from "./components1/Sidebar";
import { Login } from "./components2/Login";
import { Register } from "./components2/Register";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import scrollreveal from "scrollreveal";
import ListeEtudiants from "./components1/ListeEtudiants";
import AjoutDoc from "./components1/AjoutDoc";
import Emprunts from "./components1/Emprunts";
import Navbar from "./components1/Navbar";
import Catalogue from "./components1/Catalogue";
import ListeReservations from "./components1/ListeReservations";
import SendMess from "./components1/SendMess";
import Messages from "./components1/Messages";
import ViewMess from "./components1/ViewMess";
import Archives from "./components1/Archives";
import Discussion from "./components1/Discussion";

export const UserContext =createContext()

export default function App() {


  const [searchWord, setSearchWord]= useState("")
  const [email, setEmail]= useState("eben1@gmail.com")
  const [messages, setMessages]= useState("")
  const [nom, setNom]= useState("")
   
  const [searchPage, setSearchPage]= useState("")

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <>
    <UserContext.Provider value={{searchPage, setSearchPage,searchWord, setSearchWord,messages, setMessages,email, setEmail,nom, setNom}}>
      <Div>
        <Router>
        <Sidebar/>
        <Section>
        <Navbar />
          <Routes>
          {/*<Route path="/" element={<ListeEtudiants/>} />*/}
            <Route path="/listeEtudiant" element={<ListeEtudiants/>} />
            <Route path="/ajouterDoc" element={<AjoutDoc />} />
            <Route path="/emprunts" element={<Emprunts />} />
            <Route path="/listeReservation" element={<ListeReservations />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/sendMessage" element={<SendMess />} />
            <Route path="/viewMessage" element={<ViewMess />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/discuss" element={<Discussion/>} />
          </Routes>
        </Section>
        </Router>
      </Div>
    </UserContext.Provider>;
</>
    
  );
}

const Div = styled.div`
  position : relative;
  background-color: #ececec;
`;

const Section = styled.section`
  margin-left: 18vw;
  background-color: #ececec;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;