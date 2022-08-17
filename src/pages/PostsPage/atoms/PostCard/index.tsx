import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../contexts/UserContext'
import Button from '../../../../ui/atoms/Button'
import './index.scss'

interface Props {
  className?: string
  data: {
    id: number
    coverUrl: string
    title: string
    createdAt: string
    description?: string
  }
}

const PostCard: React.FC<Props> = ({ data }) => {
  const { isUserLogged } = useContext(UserContext)
  const navigate = useNavigate()
  const { id, coverUrl, title, createdAt, description } = data

  // if admin login, navigate to EditPost page after onClick
  const handleClick = (id: number) => {
    if (!isUserLogged) navigate(`/posts/${id}`)
    else {
      navigate(`/editpostpage/${id}`)
    }
  }

  const handleDelete = (id: number) => {
    alert(`Delete ${id}`)
  }

  return (
    <div className="card">
      <img
        src={coverUrl}
        alt="blog post image"
        className="card__img-container"
      />

      <div className="card__detail">
        <Link className="card__detail__link-btn" to={`${id}`}>
          {title.toUpperCase()}
        </Link>

        <h4>{createdAt}</h4>
        <p>{description}</p>
      <div className="button-container">
        <Button
          className={isUserLogged? `btn-text`:"btn-square"}
          onClick={() => handleClick(id)}
          text={isUserLogged ? '>> To Edit' : 'Read More'}
        />

        {isUserLogged && <Button className='btn-text'
          onClick={() => handleDelete(id)}
          text='>> To Delete'/>
        }

      </div>
      </div>
    </div>
  )
}
export default PostCard
