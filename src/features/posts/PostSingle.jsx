import React from 'react'
import { useParams } from 'react-router-dom'

const PostSingle = () => {
    const {id} = useParams()
  return (
    <div>PostSingle</div>
  )
}

export default PostSingle