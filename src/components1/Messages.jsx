import React,{useState,useEffect,useContext} from "react";
import styled from "styled-components";
import {Table, Button} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import firebase from '../metro.config'
import { UserContext } from "../App";
import { GiTriquetra } from "react-icons/gi";
import Loading from "./Loading";


export default function Messages(){

        //debut firebase

  const {messages, setMessages,email, setEmail,setNom} = useContext(UserContext)


   



        const ref = firebase.firestore().collection("MessagesEnvoyé")
        const refUser = firebase.firestore().collection("BiblioUser")
        const [data,setData]=useState([])
       // const [dataMes,setDataMes]=useState([])
        const [loader,setLoader] = useState(false)
     


        function getDataUser(){
            refUser.onSnapshot((querySnapshot) => {
              const items = []
           //   const itemsMes = []
              querySnapshot.forEach((doc) => {
                if(doc.data().messages.length>1){items.push(doc.data())}
                
               // itemsMes.push(doc.data().messages)
                setLoader(true)
              })
              setData(items)
            //  setDataMes(itemsMes)
         //   console.log(items[8].messages)
              
            })
           }
       
        useEffect(() =>{
    //     getData()
         getDataUser()
     //    console.log('mes dataaaaaaa aaaaaaaa dans Ccformationnnn',data)
        },[])

        const changerCat =(mes,mail,nom)=>{
            setMessages(mes)
            setNom(nom)
            setEmail(mail)
            
          } 

          const newMessage = () =>{
            setEmail()
          }
     




    return(
        <Section>
            <div className="mess">Messages</div>
            {loader ?
            <>
            <div className="header-mess">
                <div className="header-name">Noms</div>
                <div className="header-me">Texte</div>
                </div>
            {data.map((msg, index) =>{
                if(1){
                    return(
            <div className="horizon-div" key={index} onClick={()=>changerCat(msg.messages,msg.email,msg.name)}>
                
                <NavLink className="lin" to="/discuss" end>
                <div className="mess-name">{msg.name} : </div>
                <div className="mess-mess">{msg.messages[msg.messages.length-1].texte}  </div>
                </NavLink>
            </div>
            )} }
            )}
            </>: <Loading /> }
            <NavLink onClick={()=>newMessage()} className="new-message-link" to="/sendMessage" end>
            <div className="new-message"><span>+</span></div>
            </NavLink>
        </Section>
    );
}

const Section = styled.section`
    margin-top: 30px;
    .mess{
        color: black;
        text-align: center;
        font-size:40px;
        margin-bottom: 20px;
    }


    .header-mess{
            display:flex;
            text-decoration:none;
            width:100%;
            height:50px;
            color:black;
            margin:0 0 20px 0;
            .header-name{
                padding-top:10px;
                width:30%;
                height:100%;
                text-align:center;
                font-size:30px
            }
            .header-me{
                padding-top:10px;
                text-align:center;
                width:70%;
                height:100%;
                font-size:30px;    
            }
    }
     .horizon-div{
        display:flex;
        
        a{
            display:flex;
            text-decoration:none;
            width:100%;
            height:50px;
            color:black;
            .mess-name{
                padding-top:10px;
                width:30%;
                height:100%;
                text-overflow: ellipsis;
                text-align:center;
                white-space: nowrap;
                overflow: hidden;
                font-family:consolas;
                font-size:20px;
                font-weight:bold;
            }
            
            .mess-mess{
                padding-top:10px;
                width:70%;
                height:100%;
                text-overflow: ellipsis;
                text-align:center;
                white-space: nowrap;
                overflow: hidden;
                font-size:20px;
                    
            }
        }
        &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.322);
            background-color: white;
            border-radius:10px;
        }

    }
    
    .horizon-div:nth-child(2n + 1){
        background: white;
        border-radius:10px;
    }

    .new-message-link{
        .new-message{
            display: flex;
            position: fixed;
            background-color: #939af0;
            color: white;
            width:50px;
            height: 50px;
            bottom: 50px;
            right:50px;
            border-radius:30px;
            z-index: 5;
            font-size:60px;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;
        &:hover {
              transform: scale(1.1);
          }
    }
    }
`