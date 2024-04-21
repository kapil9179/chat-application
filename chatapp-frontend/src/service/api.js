import axios from "axios"
 const url = "http://localhost:7000"

 // createuser
export const createUser = async(data) =>{
    try{
    const res =await axios.post(`${url}/api/createuser`,data)
    }catch(error){
        console.log("exios throw error",error)
    }
}
// get user
export const getUser = async()=>{
    try{
      const res = await axios.get(`${url}/api/getuser`)
      return res.data;
    }catch(error){
        console.log(error.message)
    }
}
  // set messages
export const SetConversestion = async(chatperson)=>{
     try{
      const res = await axios.post(`${url}/api/conversestion`,chatperson);
      console.log(res);
       return res;
     }catch(err){
        console.log("error when hit conversestion endpoint",err.message)
     }
}

// getconversestionuser credentials

export  const getConversestion = async(clientid)=>{
    try{
    const res = await axios.post(`${url}/api/getconversestion`,clientid);
      return res.data;
    }catch(err){
      console.log("error is comming when conversestion get",err.message)
    }
}

// set history of user

export const newMessage = async(data) =>{
   try{
     const res =  await axios.post(`${url}/api/setmessage`,data);
     return res.data
   }catch(error){
    console.log("error in api when set message")
   }
}

// get user message

export const getMessage = async(id)=>{
    console.log("jo conversestion se id a rahi hain",id);
  try{
    const res = await axios.get(`${url}/api/getmessage/${id}`);
    return res.data
  }catch(error){
   console.log("error while fetching getmessage api",error)
  }
}

//uploadfile
 export const uploadfile = async(data)=>{
   try{
    const res = await axios.post(`${url}/api/upload/file`,data)
    return res.data
   }catch(error){
     console.log(error)
   }
}

// getfile
export const getFile = async(id)=>{
  try{
    const res =  await axios.get(`${url}/api/getfile/${id}`)
      return res.data;
  }catch(error){
    console.log("error while comming getfile",error);
  }
}
// setuserstatus
export const  setuserstatusapi = async(data)=>{
  try{
   const res  = await axios.post(`${url}/api/status`,data);
    return res
  }catch(error){
    console.log("error while status api",error)
  }
}

// getuserstatus

 export const getuserStatusApi = async(userid)=>{
   try{
    const res =  await axios.get(`${url}/api/getstatus/${userid}`)
       return res.data;
   }catch(error){
    console.log("error while get status",error)
   }
 }


 // setusername 

 export const setUserNameAPI = async(data)=>{
  try{
    const res = await axios.post(`${url}/api/setusername`,data);
    return res.data
  }catch(error){
   console.log("error ocuur setusername api",error.message)
  }
}
// getusername
export const getuserName = async(id)=>{
  try{
  const res = await axios.get(`${url}/api/getusername/${id}`)
   return res.data
  }catch(error){
    console.log("error when call getusername api" ,error.message)
  }
}

// save dp 
 export const saveDpApi = async(data)=>{
  try{
    const res = await axios.post(`${url}/api/setchangedp`,data);
     return res.data
  }catch(error){
    console.log("error occurs when save dp",error.message)
  }
 }

 // get dp when component is mount
 
 export const getUserDp = async(id)=>{
   try{
     const res = await axios.get(`${url}/api/getdp/${id}`)
      return res.data
   }catch(error){
    console.log("error while getuser dp ",error.message)
   }
 }

export const ClearChatApi = async(id) =>{
  console.log("this is delete id",id)
  try{
    const res = await axios.delete(`${url}/api/clearchat` ,{
      params:{userid:id},
      headers: { 'Content-Type': 'application/json'}
    })
  }catch(error){
    console.log("error occurs in delete req",error)
  }
}

