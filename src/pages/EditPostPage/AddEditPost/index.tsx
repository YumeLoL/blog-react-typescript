import React from 'react'
// import 'draft-js/dist/Draft.css'
import TextEditor from "../../../ui/molecules/RichTextEditor/index";
import './index.scss'

const AddEditPost = () => {



  return (
    <div className="post-edit-container">
      <h1 className="post-edit-container__title">Create a Post</h1>
      <TextEditor />
    </div>
  )
}

export default AddEditPost
