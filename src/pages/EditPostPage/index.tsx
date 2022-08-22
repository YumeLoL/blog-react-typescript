import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from 'react-rte'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import { Input } from '../../ui/atoms/Input'
import { UserId } from '../../contexts/UserContext'
import Button from '../../ui/atoms/Button'
import './index.scss'

const EditPostPage = () => {
  const navigate = useNavigate()
  const {userId} = useContext(UserId)
  const [content, setContent] = useState(RichTextEditor.createEmptyValue())
  const { id } = useParams() // to get id
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [coverUrl, setCoverUrl] = useState('') // !!! need to be figure out !!!
  const [isEdit, setIsEdit] = useState(false)

 

  // if admin does not login, then navigate to admin logoin page
  useEffect(() => {
    if (!userId) navigate('./admin')
  }, [userId])

  // checking if this is add new post page or edit post page
  useEffect(() => {
    if (!id) setIsEdit(false)
    else setIsEdit(true)
  }, [id])

  // adding cover image
  const onAddCover = async (e) => {
    console.log(e)
    const coverUrl = e.target.file[0]

    const fd = new FormData()
    fd.append('file', coverUrl, coverUrl.name)
    console.log('fd', fd)
  }

  // adding a new post (mock http request)
  const addPost = async () => {
    const res = await axios.post('http://localhost:5000/api/blog/add', {
      title,
      description,
      content: content.toString('html'),
      coverUrl:"xx.jpg",
      user: userId,
    })
    console.log(res)
  }

  // editing the existing post (mock http request)
  const editPost = async () => {
    alert('edit post successfully')
  }

  return (
    <Layout>
      <Hero
        img={require('../../resources/images/scale.jpg')}
        text={isEdit ? 'Edit The Post' : 'Add A New Post'}
      />

      <div className="add-post">
        <h1 className="add-post__title">
          {isEdit ? 'Edit The Post' : 'Add A New Post'}
        </h1>
        <div className="add-post__add-cover">
          <p className="photo">Add Cover</p>
          <input type="file" className="upload-btn" onChange={onAddCover} />
        </div>

        <Input
          placeholder="Title"
          className="mb-20"
          value={title}
          onChange={setTitle}
        />

        <textarea
          className="textarea"
          placeholder="Descripting"
          rows={4}
          cols={50}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <RichTextEditor
          className="add-post__editor"
          value={content}
          onChange={setContent}
        />

        <Button
          text={isEdit ? 'Edit Post' : 'Add Post'}
          onClick={isEdit ? editPost : addPost}
          className={'submit-btn'}
        />
      </div>
    </Layout>
  )
}

export default EditPostPage
