import * as React from 'react'
import { IAuthor } from '../../types'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin: 5px;
`

type Props = {
  author: IAuthor
}

const Author: React.FC<Props> = ({ author }) => {
  return (
    <span>
      <StyledImg className="c-img" src={author.avatar} />
      <span className="c-name">{author.name}</span>
    </span>
  )
}

export default Author
