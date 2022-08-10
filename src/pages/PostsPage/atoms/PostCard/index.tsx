import React from 'react'
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
  const { id, coverUrl, title, createdAt, description } = data
  return (
    <div className="card">
      <img
        src={coverUrl}
        alt="blog post image"
        className="card__img-container"
      />

      <div className="card__detail">
        <a href="">
          <h1 className="card__detail__title">{title.toUpperCase()}</h1>
        </a>
        <p>{createdAt}</p>
        <p>{description}</p>

        <Button className="card__detail__btn" goto={`${id}`}>
          Read More
        </Button>
      </div>
    </div>
  )
}
export default PostCard
