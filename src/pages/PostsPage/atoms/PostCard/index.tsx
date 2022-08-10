import React from 'react'
import { Props } from '../..'
import Button from '../../../../ui/atoms/Button'
import './index.scss'

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
        <a href=''>
          <h1 className="card__detail__title">
            post id: {id} {title}
          </h1>
        </a>
        <p>{createdAt}</p>
        <p>{description}</p>

        <Button className="card__detail__btn" onClick={() => alert('click')}
        >Read More</Button>
      </div>
    </div>
  )
}
export default PostCard