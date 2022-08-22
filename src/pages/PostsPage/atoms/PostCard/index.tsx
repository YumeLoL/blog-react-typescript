import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserId } from '../../../../contexts/UserContext'
import Button from '../../../../ui/atoms/Button'
import './index.scss'

interface Props {
  className?: string
  data: {
    _id: number
    coverUrl: string
    title: string
    createdAt: string
    description?: string
  }
}

const PostCard: React.FC<Props> = ({ data }) => {
  const {userId} = useContext(UserId)
  const navigate = useNavigate()
  const { _id, coverUrl, title, createdAt, description } = data

  // if admin login, navigate to EditPost page after onClick
  const handleClick = (_id: number) => {
    if (!userId) navigate(`/posts/${_id}`)
    else {
      navigate(`/editpostpage/${_id}`)
    }
  }

  const handleDelete = (_id: number) => {
    alert(`Delete ${_id}`)
  }

  return (
    <div className="card">
      <img
        src={coverUrl}
        alt={coverUrl}
        className="card__img-container"
      />

      <div className="card__detail">
        <Link className="card__detail__link-btn" to={`${_id}`}>
          {title.toUpperCase()}
        </Link>

        <h4>{createdAt}</h4>
        <p>{description}</p>
      <div className="button-container">
        <Button
          className={userId? `btn-text`:"btn-square"}
          onClick={() => handleClick(_id)}
          text={userId ? '>> To Edit' : 'Read More'}
        />

        {userId && <Button className='btn-text'
          onClick={() => handleDelete(_id)}
          text='>> To Delete'/>
        }

      </div>
      </div>
    </div>
  )
}
export default PostCard
