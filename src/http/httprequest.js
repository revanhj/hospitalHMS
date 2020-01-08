
import API from './api'

 const Get=async(url)=>{
  return await API.get(url);
}
 const Post=async(url,payload)=>{
  return await API.post(url,payload);
}
const Put=async(url,payload)=>{
  return await API.put(url,payload);
}
const Patch=async(url,payload)=>{
  return await API.patch(url);
}
const Delete=async(url)=>{
  return await API.delete(url);
}
 export {Get,Post,Put,Patch,Delete};