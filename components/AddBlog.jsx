import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate,useLocation, useNavigate } from 'react-router-dom';

const AddBlog = ({props,update}) => {
  var location=useLocation();
  console.log("location:",location.state)
  var[post,setPost]=useState({title:'',post:'',image:''});
 const navigate=useNavigate();

 useEffect(()=>{
  if(location.state!=null){
    setPost({...post,title:location.state.val.title,
                post:location.state.val.post,
              image:location.state.val.image})
    }else{
      setPost({...post,title:'',post:'',image:''})
    }
 },[])


  const inputHandler=(e)=>{
   setPost({...post,[e.target.name]:e.target.value})
   console.log(post)
  }
  const addPost=()=>{
     if(location.state!=null){
      var upId=location.state.val._id
      console.log(upId)
     axios.put("http://localhost:3008/api/edit/"+upId,post)
    .then((res)=>{
      if(res.data.message =="Blog updated successfully"){
        alert(res.data.message);
        navigate('/view')
      }else{
        alert("user not found")
      }
    }) 
  }else{console.log("btn",post)
  axios.post("http://localhost:3008/api/addblog",post)
  .then((res)=>{
    alert(res.data.message)
    Navigate('/view')
  })
  .catch((err)=>{
    console.log(err)
  })

  }
  }
  return (
    <div style={{margin:'5%'}}>
      <Typography>Add Blogs</Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid  item xs={12} sm={12} md={12}>
         <TextField variant='outlined' label='post title' fullWidth value={post.title} name='title' onChange={inputHandler}/>
        </Grid>
        <Grid  item xs={12} sm={12} md={12}>
         <TextField variant='outlined' label='Type a post' fullWidth multiline rows={7} value={post.post} name='post'onChange={inputHandler}/>
        </Grid>
        <Grid  item xs={12} sm={12} md={12}>
         <TextField variant='outlined' label='IMAGE URL' fullWidth  value={post.image}name='image' onChange={inputHandler}/>
        </Grid>
        <Grid  item xs={12} sm={12} md={12}>
         <Button variant='contained' color='primary' onClick={addPost}>SUBMIT</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddBlog
