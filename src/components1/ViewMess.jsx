import React,{useContext} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";


export default function  ViewMess(){

const {messages, setMessages,email, setEmail,nom} = useContext(UserContext)


    return(
        <Section>
            <div className="image-msg"></div>
            <div className="msg-view">
                {messages}
            </div>
            <div className="btn"><NavLink className="request"  to="/sendMessage" end>Repondre</NavLink></div>
        </Section>
    );
}


const Section = styled.section`
    margin-top: 30px; 
    display:flex;
    flex-direction: column;
    gap: 10px;
    .msg-view{
        color:black;
    }
    .btn{
        .request{
            background-color: blue;
            padding: 5px;
            text-decoration:none;
            color: white;
            border-radius: 5px;
        }
    }
`