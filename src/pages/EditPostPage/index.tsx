import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from 'react-rte'
import { useNavigate, useParams } from 'react-router-dom'
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
  const { id } = useParams() // to get id
  const [title, setTitle] = useState('')
  const [coverUrl, setCoverUrl] = useState('')
  const [isBookEssay, setIsBookEssay] = useState(false)
  const { isUserLogged } = useContext(UserContext)
  const [isEdit, setIsEdit] = useState(false)

  // if admin does not login, then navigate to admin logoin page
  useEffect(() => {
    if (!isUserLogged) navigate('./admin')
  }, [isUserLogged])

  // checking if this is add new post page or edit post page
  useEffect(() => {
    if (!id) setIsEdit(false)
    else setIsEdit(true)
  }, [id])

  // isBookEssay checkbox
  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsBookEssay(e.target.checked)
  }

  // adding cover image
  const onAddCover = async (e) => {
    console.log(e.target.file[0])
    const image = e.target.file[0]

    const fd = new FormData()
    fd.append('file', image, image.name)

    // mock http request
    const photoUrl = await PostImage(fd)
    setCoverUrl(photoUrl.data.image)
  }

  // adding a new post (mock http request)
  const addPost = async () => {
    // const text = editorValue.toString('html')
    // const post = {
    //   coverUrl,
    //   title,
    //   text,
    //   isBookEssay,
    // }

    // await AddPost(post).then(() => alert('add post successfully'))
    // navigate('./posts')
    alert('add post successfully')
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
        <h1 className="add-post__title">{isEdit ? 'Edit The Post' : 'Add A New Post'}</h1>
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
          text={isEdit ? 'Edit Post' : 'Add Post'}
          onClick={isEdit ? editPost : addPost}
          className={'submit-btn'}
        />
      </div>
    </Layout>
  )
}

export default EditPostPage
