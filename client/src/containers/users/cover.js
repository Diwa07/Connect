import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


const Cover = () => {
    const [ coverpic , setcoverpic]=useState ([])
  
    const fetchPhoto = () => {
  
  
  axios.get("http://localhost:3005/cover").then((response) => {
  
  setcoverpic(response.data.pic)
      console.log(response.data.pic)
      });
    }
    useEffect(() => {
      fetchPhoto()
    }, [] )

 const [file, setFile] = useState (null)
 const [texts, setTexts] = useState (null)
 const [message, setMessage] = useState('')

  const triggerImgSave = async ()=>{
    console.log(file)
    const formdata = new FormData()
      formdata.append('picture' ,file)
      formdata.append('texts' ,texts)

      console.log(message)
    
      const requestOptions ={
        method:"POST",
        body :formdata,
       
};  

const res = await fetch("http://localhost:3005/cover", requestOptions);
const data = await res.json()

if (res.status === 200) {

alert("uploaded")

} else {
    alert(data.errorMsg)
}


}

return (
    <>
    <div>cover
      
      
    
       <input   onKeyUp={(e) => setMessage(e.target.value)} placeholder='write something' onKeyPress={(event) => {
                      
                    }} className='input' name = "texts"  />
      <input type= "file" name='picture'  onChange={(e)=>setFile(e.target.files[0])
      } />
      <button onClick={()=>triggerImgSave()} type="submit" > summit</button>
      
    </div>
    <div>
    
    </div>
    {coverpic.picture && <img width="300" height="300"   src={require(`../../uploads/cover/${coverpic.picture[0]}`)} alt="Loading.."  />}
<div className='cover'><img width="300" height="300"   src={require(`../../uploads/cover/pic.jpg`)} alt="Loading.."  /></div>


   {/* {  validDetails.map((item,id) =>{
   
      return ( <> 
      {item.avatar && <img width="300" height="300"   src={require(`../../uploads/profile/${item.avatar}`)} alt="Loading.."  />}

      <video width="750" height="500" controls >
      <source src={require(`../../uploads/profile/${item.avatar}`)} type="video/mp4" className='video'/>
     </video> */}

</>



)
}

export default Cover
