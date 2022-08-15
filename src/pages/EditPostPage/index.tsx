import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from 'react-rte'
import {  useNavigate } from 'react-router-dom'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import { Input } from '../../ui/atoms/Input'
import { UserContext } from '../../contexts/UserContext'
import Button from '../../ui/atoms/Button'
import { AddPost, PostImage } from '../../libs/http/httpService'
import './index.scss'

const EditPostPage = () => {
  const navigate = useNavigate()
  const [editorValue, setEditorValue] = useState(
    RichTextEditor.createEmptyValue()
  )
  const [title, setTitle] = useState('')
  const [coverUrl, setCoverUrl] = useState('')
  const [isBookEssay, setIsBookEssay] = useState(false)
  const { isUserLogged } = useContext(UserContext)

  // if admin does not login, then navigate to admin logoin page
  useEffect(() => {
    if(!isUserLogged) navigate('./admin')
  },[isUserLogged])

  // isBookEssay checkbox 
  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsBookEssay(e.target.checked)
  }

  // add cover image function 
  const onAddCover = async (e)=>{
    console.log(e.target.file[0])
    const image = e.target.file[0]

    const fd = new FormData()
    fd.append('file', image, image.name)
   
    // mock http request
    const photoUrl = await PostImage(fd)
    setCoverUrl(photoUrl.data.image)
  }

  // add a new post (mock http request)
  const addPost = async () =>{
    const text = editorValue.toString('html')
    const post = {
      coverUrl,
      title,
      text,
      isBookEssay
    }

    await AddPost(post).then(() => 
    alert("add post successfully")
    )
    navigate('./posts')
  }

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
            onChange={onAddCover}
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
            onChange={onChangeType}
          />
          <p>Is this a book essay?</p>
        </div>

        <Button
          text={ 'Add Post'}
          onClick={ addPost} className={'submit-btn'}/>
      </div>
    </Layout>
  )
}

export default EditPostPage

