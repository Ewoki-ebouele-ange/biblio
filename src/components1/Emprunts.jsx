import {Table, Button} from 'react-bootstrap';
import firebase from '../metro.config';
import React,{useState,useEffect} from "react";
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp  } from "firebase/firestore";
import styled from "styled-components";
import Loading from "./Loading";






function Emprunts() {


  var dt =Timestamp.fromDate(new Date())

  
 




  //debut firebase

  const ref = firebase.firestore().collection("BiblioUser")

  const [data,setData]=useState([])
  const [loader,setLoader] = useState(false)


 
  function getData(){
   ref.onSnapshot((querySnapshot) => {
     const items = []
     querySnapshot.forEach((doc) => {
       items.push(doc.data())
       setLoader(true)
     })
     setData(items)
     
   })
  }
 
  useEffect(() =>{getData()},[])
 //firebase fin


 //update
 function updates(dos){
  const ref = firebase.firestore().collection("BiblioUser")
  if( dos.etat == 'bloc'){
  ref
  .doc(dos.email)
  .update({etat:'ras'})
  .catch((err)=>{
    console.log(err)
  })}

  if( dos.etat != 'bloc'){
    ref
    .doc(dos.email)
    .update({etat:'bloc'})
    .catch((err)=>{
      console.log(err)
    })}
  
}


//fin update

const d=new Date();

    //date
    const jour = new Array(
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    );
    const mois = new Array(
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    )


function ajouter(nomEtudiant,nomDoc){
  // debut ajouter tableau
  const washingtonRef = firebase.firestore().collection("ArchivesBiblio").doc("Arch")
   //gestion des dates
   let date1 =jour[d.getDay()]+" "+ d.getDate()+" "+ mois[d.getMonth()]+" "+d.getFullYear();
   let date = new Date()  
  //add a day
  washingtonRef.update({
    tableauArchives: arrayUnion({"nomEtudiant":nomEtudiant, "nomDoc": nomDoc ,"heure": Date(date.seconds*1000).slice(0,25)})
  });

 }



//remis1
function remis1(dos){
const ref = firebase.firestore().collection("BiblioUser")
const refArchive = firebase.firestore().collection("ArchivesBiblio")
const refDoc = firebase.firestore().collection(dos.tabEtat1[1])
if( dos.etat1 == 'emprunt'){
  ajouter(dos.name,dos.tabEtat1[0])
ref
.doc(dos.email)
.update({etat1:'ras', tabEtat1:["","",""]})
.catch((err)=>{
  console.log(err)
})
refDoc
.doc(dos.tabEtat1[4])
.update({exemplaire: dos.tabEtat1[3]+1})
.catch((err)=>{
  console.log(err)
})


}          
}

//remis2
function remis2(dos){
const ref = firebase.firestore().collection("BiblioUser")
const refDoc = firebase.firestore().collection(dos.tabEtat2[1])
if( dos.etat2 == 'emprunt'){
  ajouter(dos.name,dos.tabEtat2[0])

ref
.doc(dos.email)
.update({etat2:'ras',tabEtat2:["","",""]})
.catch((err)=>{
  console.log(err)
})
refDoc
.doc(dos.tabEtat2[4])
.update({exemplaire: dos.tabEtat2[3]+1})
.catch((err)=>{
  console.log(err)
})


}          
}

//remis3
function remis3(dos){
const ref = firebase.firestore().collection("BiblioUser")
const refDoc = firebase.firestore().collection(dos.tabEtat3[1])
if( dos.etat3 == 'emprunt'){
  ajouter(dos.name,dos.tabEtat3[0])

ref
.doc(dos.email)
.update({etat3:'ras', tabEtat3:["","","",""]})
.catch((err)=>{
  console.log(err)
})
refDoc
.doc(dos.tabEtat3[4])
.update({exemplaire: dos.tabEtat3[3]+1})
.catch((err)=>{
  console.log(err)
})


}          
}

    return (
      <Section>
        {loader ?
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
            <th>Classe</th>
            <th>Doc 1</th>
            <th>Doc 2</th>
            <th>Doc 3</th>
            <th>Etat</th>
          </tr>
        </thead>
        <tbody>
        {data.map((doc, index) =>{
          if(doc.etat1 =='emprunt' || doc.etat2 =='emprunt' || doc.etat3 =='emprunt')
          return (
        <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.name}</td>
            <td>{doc.niveau}</td>
            <td>
              <h4>
              { doc.etat1 == 'emprunt' ?  doc.tabEtat1[0]+'\n' :'' }
              </h4>
              <h6>
              { doc.etat1 == 'emprunt' ?  doc.tabEtat1[5].slice(0,16)+'\n' :'' }
              </h6>
                <div>
                  { doc.etat1 == 'emprunt' ? 
                      <Button
                      style={{backgroundColor:'green'}}
                          variant="secondary"
                          className="btn-sm"
                          onClick={()=>{remis1(doc)}}
                        >
                        Remis
                        </Button>
                        : ''}</div>
            </td>
            <td>
              <h4>
              { doc.etat2 == 'emprunt' ?  doc.tabEtat2[0]+'\n' :'' }
              </h4>
              <h6>
              { doc.etat2 == 'emprunt' ?  doc.tabEtat2[5].slice(0,16)+'\n' :'' }
              </h6>
                <div>
                  { doc.etat2 == 'emprunt' ? 
                      <Button
                      style={{backgroundColor:'green'}}
                          variant="secondary"
                          className="btn-sm"
                          onClick={()=>{remis2(doc)}}
                        >
                        Remis
                        </Button>
                        : ''}</div>
            </td>
            <td>
              <h4>
              { doc.etat3 == 'emprunt' ?  doc.tabEtat3[0]+'\n' :'' }
              </h4>
              <h6>
              { doc.etat3 == 'emprunt' ?  doc.tabEtat3[5].slice(0,16)+'\n' :'' }
              </h6>
                <div>
                  { doc.etat3 == 'emprunt' ? 
                      <Button
                      style={{backgroundColor:'green'}}
                          variant="secondary"
                          className="btn-sm"
                          onClick={()=>{remis3(doc)}}
                        >
                        Remis
                        </Button>
                        : ''}</div>
            </td>
            
            
            <td>{doc.etat}</td>
          </tr>
          )})}
        </tbody>
      </Table>: <Loading /> }
      </Section>
    );
  }
  
  export default Emprunts;

  const Section = styled.section`
  overflow:auto;
`