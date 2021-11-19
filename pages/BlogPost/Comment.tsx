import { NextPage } from 'next'
import { IComment } from '../../types'
import styled from 'styled-components'
import moment from 'moment'

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
  comment: IComment
}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{comment.title}</h6>
        <p className="card-text">{comment.description}</p>
        <div className="d-flex align-items-end flex-column">
          <DateDiv>
            <span>created:</span>
            <DateSpan>{formatDate(comment.createdAt)}</DateSpan>
          </DateDiv>
          <DateDiv>
            <span>updated:</span>
            <DateSpan>{formatDate(comment.updatedAt)}</DateSpan>
          </DateDiv>
        </div>
      </div>
    </div>
  )
}

export default Comment
