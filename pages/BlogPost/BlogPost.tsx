import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Post from './Post'
import { fetchPosts } from '../api/blogPost.api'
import { useQuery } from 'react-query'

const BlogPost: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isError, isLoading } = useQuery('posts', fetchPosts)
  const totalCount = !!data ? data.length : 0
  const pageSize = 5
  const pageCount = Math.ceil(totalCount / pageSize)
  const pages = Array.from(Array(pageCount).keys()).map((o) => o + 1)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {pages.map((page) => {
            let classes = 'page-item'

            if (page === currentPage) {
              classes += ' active'
            }

            return (
              <li key={page} className={classes}>
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </a>
              </li>
            )
          })}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {!!data &&
        data.slice(currentPage, currentPage + pageSize).map((post) => {
          return <Post key={post.id} post={post} />
        })}
    </div>
  )
}

export default BlogPost
