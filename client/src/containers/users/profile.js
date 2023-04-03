import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'




const Profile = () => {
  const [ validDetails , setvalidDetails]=useState ([])

  const fetchPhoto = () => {


axios.get("http://localhost:3005/profile").then((response) => {

    setvalidDetails(response.data.validDetails)
    console.log(response.data.validDetails)
    });
  }
  useEffect(() => {
    fetchPhoto()
  }, [] )
  const{name,_id}=useSelector(state=>state.user)
  
  const [file, setFile] = useState (null)
  const triggerImgSave = async ()=>{
    console.log(file)
    const formdata = new FormData()
      formdata.append('avatar' ,file)
      formdata.append('_id' ,_id)
      formdata.append('name' ,name)
    
      const requestOptions ={
        method:"POST",
        body :formdata,
};  

const res = await fetch("http://localhost:3005/profile", requestOptions);
const data = await res.json()

if (res.status === 200) {

alert("uploaded")

} else {
    alert(data.errorMsg)
}


}





  return (
    <>
    <div>Profile
      
      
    
       
      <input type= "file" name='avatar'  onChange={(e)=>setFile(e.target.files[0])
      } />
      <button onClick={()=>triggerImgSave()} type="submit" > summit</button>
      
    </div>
    <div>
    
    </div>

<div className='slide'>

   {  validDetails.map((item,id) =>{
   
      return ( <> 
      {item.avatar && <img width="300" height="300"   src={require(`../../uploads/profile/${item.avatar}`)} alt="Loading.."  />}

      {/* <video width="750" height="500"  style={{
        borderRadius:"30px 30px"
      }} controls >
      <source src={require(`../../uploads/profile/${item.avatar}`)} type="video/mp4" className='video'/>
     </video>
       */}
   
   
     
   
      

</>);
  
      
   })}  
    
    </div>

   
   {/* {validDetails.file && <img src={require(`../../../uploads/profile/ ${validDetails.file}`)} alt= ''/>} */}
   </>

)
}

export default Profile 