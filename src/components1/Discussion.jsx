import React,{useState,useEffect,useContext, useRef} from "react";
import "./Discussion.css";
import { UserContext } from "../App";
import { IoMdSend } from "react-icons/io";
import { FaArchive } from "react-icons/fa";
import firebase from '../metro.config'
import { arrayUnion,Timestamp  } from "firebase/firestore";
import Loading from "./Loading";

export default function  Discussion(){


  const {messages, setMessages,email, setEmail,setNom,nom} = useContext(UserContext)

  const [datUserTest, setDatUserTest]= useState(true)
  useEffect(() => {
   // console.log(email)
    setTimeout(() => {
      setDatUserTest(false);
    }, 100);
  }, []);

    const [dat, setDat] = useState([])
    
    function subscriber (){ 
      if(email.length!=0){
        firebase.firestore()
        .collection('BiblioUser')
        .doc(email)
        .onSnapshot(documentSnapshot => {
       //   console.log('User exists: ', documentSnapshot._firestore)   
            setDat(documentSnapshot.data())
       })}}

       console.log(email)

       useEffect(() =>{
        subscriber()
       },[])

    var dt =Timestamp.fromDate(new Date())
    function ajouter(){
     // debut ajouter tableau
     const washingtonRef = firebase.firestore().collection("BiblioUser").doc(email)
     
     washingtonRef.update({
       messages: arrayUnion({"recue":"R", "texte": message ,"heure": dt})
     });
 
    }

    const  res = async function(){
        await firebase.firestore().collection('MessagesRecue').doc(message).set({
           email:email,
           messages:message,
           nom:nom
        })
    //    setNom("");
        setMessage("");
     //   setEmail("");
     //   setObjet("");
        ajouter()
    
       }

       const [objet, setObjet] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        
        
    }


    return(
      <div>
        {
          email.length!=0?
        <div className="messag-div">
            <div className="discussion">
            <div className="namerecep">{nom}</div>
          
            {datUserTest ? 
            <Loading /> :
              (dat.messages.map((dev,index)=>
                    dev.recue == "R" ?<Send heure={dev.heure} texte={dev.texte} key={index}/>
                      :<Receiv heure={dev.heure} texte={dev.texte} key={index}/>
            ))
            }
            </div>
            <div className="write-mess">
                    <form ref={formRef} onSubmit={handleSubmit} className="form-mess">
                        <textarea type="text" className="input-mess" value={message} placeholder="Entrer votre message..." onChange={(e) => setMessage(e.target.value)} />
                        <input type="hidden" value={email} name="email"/>
                        <IoMdSend type="submit" onClick={res} />
                    </form>
                </div>
        </div> :<div></div>
        }
        </div>
    );
}

const Receiv =({heure, texte})=>{
    var date = new Date(heure.seconds*1000)
    var forma = date.toLocaleString()
    var format = date.toJSON(10)
    var formatDate = date.toDateString()
    var formatHeure = date.toTimeString()
  
    //var dt =Timestamp.fromDate(new Date())
   // var dte = dt.toDateString()
  //  console.log(Timestamp.fromDate(new Date()))
  // console.log(dt)
    return(
      <div className="recepteur">
                    <span className="text-rec">{texte}</span>
                    <p>{formatDate} At {formatHeure.slice(0,8)}</p>
                </div>
    )
  }

  const Send=({heure, texte})=>{
    var date = new Date(heure.seconds*1000)
    var forma = date.toLocaleString()
    var format = date.toJSON(10)
    var formatDate = date.toDateString()
    var formatHeure = date.toTimeString()
      return(
        <div className="emmeteur">
            <span className="text-emm">{texte}</span>
            <p>{formatDate} At {formatHeure.slice(0,8)}</p>
        </div> 
      )
  }