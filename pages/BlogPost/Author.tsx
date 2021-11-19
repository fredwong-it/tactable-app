import { NextPage } from 'next'
import { IAuthor } from '../../types'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  margin: 10px;
`

type Props = {
  author: IAuthor
}

const Author: React.FC<Props> = ({ author }) => {
  return (
    <span>
      <StyledImg src={author.avatar} />
      <span>{author.name} </span>
    </span>
  )
}

export default Author
