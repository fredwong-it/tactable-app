import * as React from 'react'
import { IComment } from "../../types";
import styled from "styled-components";
import Date from './Date'

const CardDiv = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 25px;
  margin-top: 10px;
  background-color: #F0F0F0;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentDesc = styled.div`
  font-size: 14px;
`;

type Props = {
  comment: IComment;
};

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <CardDiv className="card">
      <div className="card-body">
        <TitleDiv>
          <h6 className="card-title">{comment.title}</h6>
          <Date>{comment.createdAt}</Date>
        </TitleDiv>
        <CommentDesc className="card-text">{comment.description}</CommentDesc>
      </div>
    </CardDiv>
  );
};

export default Comment;
