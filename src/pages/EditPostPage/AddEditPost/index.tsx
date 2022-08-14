import React from 'react'
// import TextEditor from "../../../ui/molecules/RichTextEditor/index";
import { TextEditor } from '../../../ui/molecules/TextEditor';
import './index.scss'

const AddEditPost = () => {



  return (
    <div className="post-edit-container">
      <h1 className="post-edit-container__title">Create A New Post</h1>
      <TextEditor />
    </div>
  )
}

export default AddEditPost
