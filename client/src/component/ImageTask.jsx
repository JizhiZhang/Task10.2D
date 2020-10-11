import React from 'react';
import InputExample from './Input'
import {  Header, Icon, Segment } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import '../css/ImageTask.css'

const ImageTask = () => {

  const{upload, handleSubmit} = useForm()

  const onSubmit = async () => {
    var form = document.getElementById("myForm");
    var formData1 = new FormData(form);
    var picture = formData1.get("picture");
    const formData = new FormData()
    formData.append("picture",picture)
    const res = await fetch("http://localhost:8000/picture",{
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    alert(JSON.stringify(res))
  }

  return(
  <div>
  <div className='title3'>
  <h2>Setting up your Task</h2>
</div>
    <Segment placeholder>
      <Header icon>
        <Icon name='file image' />
        Please choose a image file, the image will upload to 'uploads' folder.
      </Header>
      <form onSubmit={handleSubmit(onSubmit)} id='myForm'>
      <InputExample inputid='imageinput' type='file' ref={upload} classname='ImageUpload' name='picture'/>
      <button type='submit' className='ui button' id='ImageButton'>Upload Image</button>
      </form>
    </Segment>
    </div>)
}
  
  export default ImageTask

