import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from 'react-rte'
import {  useNavigate } from 'react-router-dom'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import './index.scss'
import { Input } from '../../ui/atoms/Input'
import { UserContext } from '../../contexts/UserContext'

const EditPostPage = () => {
  const navigate = useNavigate()
  const [editorValue, setEditorValue] = useState(
    RichTextEditor.createEmptyValue()
  )
  const [title, setTitle] = useState('')
  const [isBookEssay, setIsBookEssay] = useState(false)
  const { isUserLogged } = useContext(UserContext)

  useEffect(() => {
    if (!isUserLogged) navigate('/login')
  }, [isUserLogged])

  return (
    <Layout>
      <Hero
        img={require('../../resources/images/scale.jpg')}
        text={'Add A New Post'}
      />

      <div className="add-post">
        <h1 className="add-post__title">Create A New Post</h1>
        <div className="add-post__add-cover">
          <p className="photo">Add Cover</p>
          <input
            type="file"
            className="upload-btn"
            // onChange={onAddCover}
          />
        </div>

        <Input
          placeholder="Title"
          className="mb-20"
          value={title}
          onChange={setTitle}
        />

        <RichTextEditor
          className="add-post__editor"
          value={editorValue}
          onChange={setEditorValue}
        />
        <div className="add-post__type">
          <input
            type="checkbox"
            checked={isBookEssay}
            // onChange={onChangeType}
          />
          <p>Is this a book essay?</p>
        </div>

        {/* <Button
          text={`${isEditPage ? 'Edit Post' : 'Add Post'}`}
          onClick={isEditPage ? editPost : addPost}
        /> */}
      </div>
    </Layout>
  )
}

export default EditPostPage
