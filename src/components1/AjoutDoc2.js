import React,{useContext,useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from '../metro.config'
import ReactJsAlert from "reactjs-alert"







export default function AjoutDoc2() {

  const formRef = useRef()

    //add data
  const [name, setName] = useState('')
  const [cathegorie, setCathegorie] = useState('')
  const [desc, setDesc] = useState('')
  const [etagere, setEtagere] = useState('')
  const [exemplaire, setExemplaire] = useState(0)
  const [image, setImage] = useState('')
  const [salle, setSalle] = useState('')
 

  

  // Add a new document in collection "cities" with ID 'LA'
  const  res = async function(){
    await firebase.firestore().collection('BiblioInformatique').doc(name).set({
       name: name,
       exemplaire:parseInt(exemplaire) ,
       etagere:etagere,
       salle:salle,
       image:image,
       cathegorie:cathegorie,
       desc:desc,
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

   
    

    const closeModal = () => {
        setValidation("")
    }

    //ajouter
   function ajouter(){
    const ref = firebase.firestore().collection("123")
    
    ref
    .doc('anna')
    .set({name:inputs.name, exemplaires: inputs.exemplaire, cathegorie: inputs.cathegorie ,salle: inputs.salle ,etagere: inputs.etagere , description: inputs.desc ,image: inputs.image})
    .catch((err)=>{
      console.log(err)
    })  
    
   console.log("ajouter", inputs)
  }

  return (
    <>
   
        
        <div className='position-fixed top-0 vw-100 vh-100' style={{marginTop:80,overflowY:'scroll',overflowX:'scroll',scrollBehavior:'smooth'}} >
            <div onClick={closeModal} className='w-100 h-100 bg-dark bg-opacity-75'></div>
                <div className='position-absolute top-50 start-50 translate-middle bg-light' style={{minWidth:'1000px'}}>
                    
                        <div className='modal-content' style={{padding:10}}>
                            <div className='modal-header'>
                                <h5 className='modal-title' style={{color:'red'}}>Ajouter un document</h5>
                                <button onClick={closeModal} className='btn-close'></button>
                            </div>

                            <div className='modal-body'>
                                <form ref={formRef} onSubmit={res} className='sign-up-form'>
                                    <div className='mb-3' style={{padding:10}}>
                                        <label className='form-label' htmlFor='signUpEmail'>name</label>
                                        <input value={name}  onChange={(e) => setName(e.target.value)} type='text' name='name' required id='signUpEmail' className='form-control' />

                                        <label className='form-label' htmlFor='repeatPwd'>nombre d'exemplaires </label>
                                        <input value={exemplaire}  onChange={(e) => setExemplaire(e.target.value)} type='number' name='exemplaire' required id='repeatPwd' className='form-control'  />
                                        
                                    
                                        <label className='form-label' htmlFor='signUpPwd'>cathegorie</label>
                                        <select name='cathegorie' onChange={(e) => setCathegorie(e.target.value)} class="form-select" aria-label="Default select example">
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
                                        </select>

                                        <label className='form-label' htmlFor='signUpPwd'>cathegorie2</label>
                                        <select name='cathegorie' onChange={(e) => setCathegorie(e.target.value)} class="form-select" aria-label="Default select example">
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
                                        </select>
                                    
                                    
                                        <label className='form-label' htmlFor='salle'>Salle</label>
                                        <select  value={salle}  onChange={(e) => setSalle(e.target.value)} class="form-select" aria-label="Default select example">
                                        <option value=''></option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </select>

                                        <label className='form-label' htmlFor='etagere'>Etagère</label>
                                        <input  value={etagere}  onChange={(e) => setEtagere(e.target.value)} type='text' name='etagere' required id='etagere' className='form-control'  />
                        
                                    
                                        <label className='form-label' htmlFor='desc'>Description</label>
                                        <input  value={desc}  onChange={(e) => setDesc(e.target.value)} type='text' name='desc' required id='desc' className='form-control'  />
                                        
                                    

                                    
                                        <label className='form-label' htmlFor='repeatPwd'>Image</label>
                                        <input  value={image}  onChange={(e) => setImage(e.target.value)} type='text' name='image' required id='repeatPwd' className='form-control'  />
                                       
                                    </div>

                                    

                                    <button type='button' onClick={res} className='btn-btn-primary' style={{borderRadius:5,textAlign:'center', margin:10,color:'white',background:'blue'}}>Ajouter</button>
                                    <ReactJsAlert
                                      status={status} // true or false
                                      type={type} // success, warning, error, info
                                      title={title}
                                      quotes={true}
                                      quote=""
                                      Close={() => setStatus(false)}
                                  />

                                </form>
                            </div>
                        </div>
                    
                </div>
             
            </div>
        
    </>
  )
}
