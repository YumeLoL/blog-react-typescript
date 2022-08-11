import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const { id, coverUrl, title, createdAt, description } = data

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

        <Button className="card__detail__btn" onClick={() => navigate(`/posts/${id}`)} text="Read More"/>
         
       
      </div>
    </div>
  )
}
export default PostCard
