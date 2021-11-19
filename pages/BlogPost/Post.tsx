import { NextPage } from 'next'
import { IPost } from '../../types'
import Author from './Author'
import Comment from './Comment'
import styled from 'styled-components'
import moment from 'moment'

const StyledPost = styled.div`
  margin: 10px;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

const DateDiv = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DateSpan = styled.span`
  font-size: 14px;
`

const formatDate = (dateStr: string) => {
  return moment(dateStr).format('MM/DD/YYYY, h:mm:ss a')
}

type Props = {
  post: IPost
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <StyledPost className="card">
      <div className="card-body">
        <h5 className="card-title">Post {post.title}</h5>
        <p className="card-text">{post.description}</p>
        <Footer>
          <div>
            Authors:
            {post.authors.map((author) => (
              <Author key={author.id} author={author} />
            ))}
          </div>
          <div>
            <div className="d-flex align-items-end flex-column">
              <DateDiv>
                <span>created:</span>
                <DateSpan>{formatDate(post.createdAt)}</DateSpan>
              </DateDiv>
              <DateDiv>
                <span>updated:</span>
                <DateSpan>{formatDate(post.updatedAt)}</DateSpan>
              </DateDiv>
            </div>
          </div>
        </Footer>
        <div>
          Comments:
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </StyledPost>
  )
}

export default Post
