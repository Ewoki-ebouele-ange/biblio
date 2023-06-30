import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import ReactJsAlert from "reactjs-alert";
import "./AjoutDoc.css";
import firebase from '../metro.config';
import { storage } from "../firebase-config";
import {ref , uploadBytes, getDownloadURL,getStorage, uploadBytesResumable} from "firebase/storage"
import {v4} from "uuid"
import Avatar from '@mui/material/Avatar';

export default function AjoutDoc (props) {
 //   const [email, setEmail] = useState('');
    const [name, setName] = useState('')
  const [cathegorie, setCathegorie] = useState('')
  const [desc, setDesc] = useState('')
  const [etagere, setEtagere] = useState('')
  const [exemplaire, setExemplaire] = useState(0)
  const [image, setImage] = useState(null)
  const [pdf, setPdf] = useState(null)
  const [url, setUrl] = useState(null)
  const [salle, setSalle] = useState('')
  const [typ, setTyp] = useState('')
  const formRef = useRef()

 const handleChangeImage =(e)=>{
    if(e.target.files[0]){
        setImage(e.target.files[0])
        handleSumit()
    }
  }

  const handleSumit =(e)=>{
   
    const imageRef = ref(storage,`images/${image.name + v4()}`)
    const pdfRef = ref(storage,`files/${image.name}`)
    
    uploadBytes(imageRef, image).then(()=>{
        getDownloadURL(imageRef).then((url)=>{
            setUrl(url)
        })
        .catch((error)=>{
            console.log(error.message,"error getting the image url")
        })
        setImage(null)
    }).catch((error)=>{
        console.log(error.message)
    })
 
 }

 
 

  

// Add a new document in collection "cities" with ID 'LA'
const  res = async function(){
    await firebase.firestore().collection('BiblioInformatique').doc(name).set({
       name: name,
       exemplaire:parseInt(exemplaire) ,
       etagere:etagere,
       salle:salle,
       image:url,
       type:typ,
       nomBD:name,
       cathegorie:cathegorie,
       desc:desc,
       commentaire:[
        {
            heure: new Date(),
            nomUser:'',
            texte:'',
            note:0
        }
       ]
    })
    setStatus(true);
    setType("success");
    setTitle("Document ajouté avec succes");

   }





  //fin addData



    //debut formulaire

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
    
      
      setInputs(values => ({...values, [name]: value}))
    }
  
 
  

    //fin formulaire

    const [validation, setValidation] = useState("")

   

    //Alert 

    const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

    //fin   Alert

   


    //ajouter
   function ajouter(){
    const ref = firebase.firestore().collection("BiblioInformatique")
    
    ref
    .doc('anna')
    .set({name:inputs.name, exemplaires: inputs.exemplaire, cathegorie: inputs.cathegorie ,salle: inputs.salle ,etagere: inputs.etagere , description: inputs.desc ,image: inputs.image})
    .catch((err)=>{
      console.log(err)
    })  
    
   console.log("ajouter", inputs)
  }

  /*const [imageUpload, setImageUpload] = useState(null)

  const uploadImage=()=>{
    if (imageUpload = null) return;
    const imageRef = ref(storage,`images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(()=>{
        alert("Image uploader")
    })
  }*/

    return (
        <Form ref={formRef} onSubmit={res} className="rounded p-4 p-sm-3">
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label className="labelForm">Entrer le nom du document</Form.Label>
                <Form.Control className="name-input" type="text" placeholder="name" name="name" value={name}  onChange={(e) => setName(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicNumber'>
                <Form.Label className="labelForm">Entrer le nombre d'exemplaire</Form.Label>
                <Form.Control className="price-input" type="number" placeholder="Nombre d'exemplaires" name="exemplaire" value={exemplaire}  onChange={(e) => setExemplaire(e.target.value)} ></Form.Control>
            </Form.Group> 
            <Form.Group className='mb-3' controlId='formBasicName'>   
                <Form.Label className="labelForm">Entrer la matière</Form.Label>
                <Form.Select className="name-input" aria-label="Default select example" type="text" name='cathegorie' onChange={(e) => setCathegorie(e.target.value)} required>
                    <option value=''></option>
                    <option value='Mathematique'>Mathematique</option>
                    <option value='Physique'>Physique</option>
                    <option value='Chimie'>Chimie</option>
                    <option value='Genie Informatique'>Genie Informatique</option>
                    <option value="Genie Civile">Genie Civile</option>
                    <option value='Genie Electrique'>Genie Electrique </option>
                    <option value='Genie Mecanique'>Genie Mecanique </option>
                    <option value='Genie Telecom'>Genie telecom </option>
                    <option value='Genie Electrique'>Genie electrique </option>
                    <option value='Memoire GI'>Memoire Genie Informatique </option>
                    <option value='Memoire GC'>Memoire Genie Civile </option>
                    <option value='Memoire GEle '>Memoire Genie Electrique </option>
                    <option value='Memoire GTel'>Memoire Genie Telecom </option>
                    <option value='Memoire GInd'>Memoire Genie Industriel </option>
                    <option value='Memoire GM'>Memoire Genie Mecanique </option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicName'>   
                <Form.Label className="labelForm">Entrez le genre</Form.Label>
                <Form.Select className="name-input" aria-label="Default select example" type="text" name='cathegorie' onChange={(e) => setTyp(e.target.value)} required>
                    <option value=''></option>
                    <option value='IA'>IA</option>
                    <option value='reseau'>Reseau</option>
                    <option value='BTP'>BTP</option>
                    <option value='gim'>gim</option>
                    <option value="electricite">electricite</option>
                    <option value='algebre'>algebre</option>
                    <option value='securité'>securité</option>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicNumber'>
                <Form.Label className="labelForm">Entrer le numero de salle</Form.Label>
                <Form.Select className="name-input" aria-label="Default select example" placeholder="Entrer la salle" name="salle" value={salle}  onChange={(e) => setSalle(e.target.value)} required>
                    <option value=''></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label className="labelForm">Etagère</Form.Label>
                <Form.Control className="name-input" type="text" placeholder="Etagère" value={etagere}  onChange={(e) => setEtagere(e.target.value)} name='etagere' required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicName'>  
                <Form.Label className="labelForm">Entrer la description du document</Form.Label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Desciption" value={desc}  onChange={(e) => setDesc(e.target.value)} name='desc'></textarea>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicName'>
            <button type='button' onClick={handleSumit} style={{borderRadius:5,textAlign:'center', padding:10,color:'white',backgroundColor:'grey'}}>Img</button>
            <Avatar src={url} sx={{width:150,height:150}} />
                <Form.Label className="labelForm">Entrer le lien de l'image</Form.Label>
                <Form.Control className="image-input" type="file" placeholder="Image"   onChange={handleChangeImage} name='image' required></Form.Control>
            </Form.Group>
            <ReactJsAlert
                status={status} // true or false
                type={type} // success, warning, error, info
                title={title}
                quotes={true}
                quote=""
                Close={() => setStatus(false)}
            />
            <button type='button' onClick={res} className='btn-btn-primary' style={{borderRadius:5,textAlign:'center', padding:10,color:'white',backgroundColor:'red'}}>Ajouter</button>
            
        </Form>
    )
}