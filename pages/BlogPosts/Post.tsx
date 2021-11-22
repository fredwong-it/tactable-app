import * as React from 'react'
import { IPost } from "../../types";
import Author from "./Author";
import Comment from "./Comment";
import styled from "styled-components";
import Date from './Date'

const StyledPost = styled.div`
  border-radius: 25px;
  border: 1px solid lightgray;
  margin: 10px;
`;

const InfoDiv = styled.div`
  font-style: italic;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostBySpan = styled.span`
  margin-right: 10px;
`

const CommentsDiv = styled.div`
  text-align: right;
`;

const CommentsBtn = styled.button`
  color: gray;
  background-color: white;
  border: 0px;
`;

type Props = {
  post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
  const [showComments, setShowComments] = React.useState(false);

  const handleClick = () => {
    setShowComments(!showComments);
  };

  const renderComments = () => {
    const commentsCount = post.comments.length;
    return (
      <div>
        <CommentsDiv>
          <CommentsBtn onClick={handleClick}>
            {`${commentsCount} ${commentsCount === 1 ? "comment" : "comments"}`}
          </CommentsBtn>
        </CommentsDiv>
        {showComments &&
          post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    );
  };

  return (
    <StyledPost className="card">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <InfoDiv>
          <div>
            <PostBySpan>Posted by</PostBySpan>
            {post.authors.map((author) => (
              <Author key={author.id} author={author} />
            ))}
          </div>
          <Date>{post.createdAt}</Date>
        </InfoDiv>
        <p className="card-text">{post.description}</p>
        {post.comments.length > 0 && renderComments()}
      </div>
    </StyledPost>
  );
};

export default Post;
