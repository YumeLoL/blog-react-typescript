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

        <Button
          className="card__detail__btn"
          onClick={() => handleClick(id)}
          text={isUserLogged ? 'Edit' : 'Read More'}
        />
      </div>
    </div>
  )
}
export default PostCard
