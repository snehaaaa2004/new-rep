import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Link = () => {
    const [blogName,setBlogName]=useState("")
    const [description, setDescription]=useState("")
    const [authorName, setAuthorName] = useState("");
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('blog name:', blogName);
        console.log('Descriptions:', description);
        console.log('author Name:', authorName);
        alert('Blog submitted successfully!');
    
    

    
    setBlogName('');
    setDescription('');
    setAuthorName('');
       
    }
  return (
    <>
     <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="blogName"
          placeholder="Enter Blog Name"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          required
        /><br /><br />

        <textarea
          name="description"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br /><br />

        <input
          type="text"
          name="authorName"
          placeholder="Enter Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        /><br /><br />

    
        <button type='submit'>Submit</button>
        
      </form>
      
      
    </>
  )
}

export default Link
